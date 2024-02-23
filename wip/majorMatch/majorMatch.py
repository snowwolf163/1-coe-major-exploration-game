import random
import json
majors = []
majorsCount = 4

#helper function to get the first digit of a number for revised class card mechanics
def firstDigit(n):
    return int(str(n)[0])

class Card():
    def __init__(self, major, name, value):
        self.major = major
        self.name = name
        self.value = value

class Deck(list):
    def __init__(self):
        #Initialize the deck
        for major in majors:
            for card in major['classCards']:
                self.extend(2 * [Card(major['major'], card['className'] + " " + card['subject'], card['courseNumber'])])
            #Create two of each action card of each color
            self.extend([Card(major['major'],"Reverse",0), Card(major['major'],"Homework",0), Card(major['major'],"Sick Day",0)] * 2)
        #Add the Wild cards
        self.extend([Card(major['major'], "Group Project",0)] * 4)
        self.cardCount = len(self)
        random.shuffle(self)

    def grabTop(self):
        for i in range(self.cardCount):
            if self[i].major in [major['major'] for major in majors]:
                self.top = self.removeCard(i+1)
                self.major = self.top.major
                return

    def insertCard(self,card):
        self.append(card)
        self.cardCount += 1
        self.top = card
        if self.top.value != 0:
            self.major = self.top.major

    def removeCard(self,n):
        removed = self.pop(n-1)
        self.cardCount -= 1
        if not self.cardCount:
            self.cardCount = len(self)
            random.shuffle(self)
        return removed

#Inherit deck as player to represent the player's hand
class Player(Deck):
    def __init__(self, human, name, drawDeck):
        self.cardCount = 0
        self.isPlayer = human
        self.name = name
        self.draw(7,drawDeck)
    
    #Draws n cards from the drawing deck
    def draw(self, n, drawDeck):
        for i in range(n):
            if not drawDeck:
                print("Out of cards to draw from! Bringing in new deck...)")
                top = drawDeck.top
                drawDeck = Deck()
                drawDeck.top = top
            card = drawDeck.removeCard(1)
            self.insertCard(card)
    
    #Print the cards in the hand, indexed by 1
    def printHand(self):
        print(f"{self.name}'s Hand:")
        for i in range(self.cardCount):
            if self[i].value != 000:
                print(f"{i+1}: {self[i].major} {self[i].name} {self[i].value}")
            else:
                print(f"{i+1}: {self[i].major} {self[i].name}")
    
    #Check if the hand has a card that can be played on the top of the used card pile
    def hasMatch(self, drawDeck):
        for i in range(self.cardCount):
            if self[i].major == drawDeck.major or firstDigit(self[i].value) == firstDigit(drawDeck.top.value):
                return (True, i+1)
        return (False, drawDeck.top)
    
    #Make the player choose which card to play on their turn if possible
    def getChoice(self, top, drawDeck):
        if self.hasMatch(drawDeck)[0] == False:
            print("You do not have any playable cards. Draw one card.")
            self.draw(1,drawDeck)
            print(f"You drew a {self[-1].major} {self[-1].name} {self[-1].value} card.")
            if self[-1].major == drawDeck.major or firstDigit(self[-1].value) == firstDigit(top.value):
                return (True, self.removeCard(0))
            return (False, self[-1])

        while True:
            chosenCard = input("Please type in the number of the card you wish to play: ")
            try: 
                chosenCard = int(chosenCard)
            except:
                print(f"You must choose the index of the card from 1 to {self.cardCount}")
                continue
            if 0 > chosenCard or chosenCard > self.cardCount:
                print(f"You must choose the index of the card from 1 to {self.cardCount}") 
                continue
            comp = self[chosenCard-1]
            if comp.major != drawDeck.major and firstDigit(comp.value) != firstDigit(top.value):
                print(f"You must use a card that matches in major or class level.")
                continue
            chosenCard = self.removeCard(chosenCard)
            return (True, chosenCard)

    #Run the turn for a given player
    def playerTurn(self,drawDeck,nextEffect):
    
        #If a skip turn effect is in play, skip the player's turn and draw cards
        if nextEffect == "Sick Day":
            print(f"{self.name} called in sick!\n")
            return (False, "0")
        if nextEffect == "Homework":
            print(f"{self.name} got assigned homework and must draw two cards of work!\n")
            self.draw(2, drawDeck)
            return (False, "0")
        if nextEffect == "Group Project":
            print(f"{self.name} got stuck on a group project and must draw four cards of work!\n")
            self.draw(4, drawDeck)
            return (False, "0")

        #If not a human player, run a different version of the turn without user input
        if not self.isPlayer:
            return self.aiTurn(drawDeck)
        
        #Inform the player of the card they are playing against
        print(f"The card on top of the pile is a {drawDeck.major} {drawDeck.top.name} {drawDeck.top.value} card.")
        print(f"You have {self.cardCount} cards.")
        self.printHand()
        chosenCard = self.getChoice(drawDeck.top, drawDeck)
        #If player was made to draw a card and card didn't match, move to next player's turn
        if not chosenCard[0]:
            print("The card could not be played, ending your turn.\n")
            return (False, "0")
        drawDeck.insertCard(chosenCard[1])
        print(f"You played the {chosenCard[1].major} {chosenCard[1].name} {chosenCard[1].value} card.\n")
        if chosenCard[1].major == "Wild":
            while True:
                print(f"You must pick which color to set the top of the pile to.")
                for i in range(majorsCount):
                    print(f"{i+1}: {majors[i]}")
                wildColor = input("Pick the number corresponding to the major:")
                try: wildColor = int(wildColor)
                except:
                    print("That was not an integer.")
                    continue
                if wildColor < 0 or wildColor > typesCount:
                    print(f"That was not a number 1-{typesCount}.")
                    continue
                drawDeck.color = types[wildColor-1]
                break
        if self.cardCount == 1:
            #Call uno
            print(f"{self.name}: One Card Left! OSU!\n")
        if self.cardCount == 0: 
            #High value, proof-read finishing message
            print(f"Congratulations, you won {self.name}!\n")
            return (True, "0")
        else:
            return (False, chosenCard[1].name)
        
    def aiTurn(self, drawDeck):
        print(f"{self.name} has {self.cardCount} cards!")
        
        #If the ai can play a card, do so
        matchFound,chosenCard = self.hasMatch(drawDeck)
        if matchFound == False:
            print(f"{self.name} had to draw a card!")
            self.draw(1,drawDeck)    
            matchFound,chosenCard = self.hasMatch(drawDeck)
        if matchFound == True:
            chosenCard = self.removeCard(chosenCard)
            drawDeck.insertCard(chosenCard)
            print(f"{self.name} played the {chosenCard.major} {chosenCard.name} {chosenCard.value} card.")
            if chosenCard.major == "Wild":
                wildColor = types[random.randrange(typesCount)]
                drawDeck.major = wildColor
                print(f"{self.name} set the card type on top of the pile to {wildColor}.")
            if self.cardCount == 1:
                print(f"{self.name}: It's about to be over for you! OSU!\n")
            elif self.cardCount == 0:
                print(f"{self.name} has won the game!\n")
                return (True, "0")
        print("")
        return (False, chosenCard.value)

def main():
    #Grab list of majors from majors.json
    majorsjson = json.load(open("majors.json"))

    #Pick four random majors
    for i in range(majorsCount):
        global majors
        majors.append(majorsjson.pop(random.randrange(len(majorsjson))))
    print(f"The majors in play this game are: {[major['major'] for major in majors]}")
    #Initialize the playing deck
    drawDeck = Deck()
    drawDeck.grabTop()

    playerName = input("Please type in your name: ")
    players = [Player(True,playerName, drawDeck)]
    #Get the number of opponents, validate the input
    while True:
        print("Input the number of opponents to play against, up to 3.")
        opps = input("Number of Opponents: ")
        try: 
            opps = int(opps)
        except ValueError:
            print("That input was not a number.")
            continue
        if opps < 1 or opps > 3:
            print("The number of opponents must be between 1 and 3.")
            continue
        break
    for x in range(opps):
        players.append(Player(False,f"Bot{x+1}", drawDeck))
    nextEffect = "0"
    while True: 
        i = 0
        while i != opps+1:
            gameWon, nextEffect = players[i].playerTurn(drawDeck, nextEffect)
            if gameWon:
                playAgain = input("Type 'y' to play again, anything else to exit.")
                if str(playAgain) == "y":
                    main()
                exit(1)
            if nextEffect == "Reverse":
                i = opps - i
                players.reverse()
            i += 1

if __name__ == "__main__":
    main()
