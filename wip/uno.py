import random

types = ["Red", "Blue", "Yellow", "Green"]
typesCount = len(types)

class Card():
    def __init__(self, type, value):
        self.type = type
        self.value = value

    def printCard(self):
        print(self.type, self.value)

class Deck(list):
    def __init__(self):
        #Initialize the deck
        for type in types:
            #Create 0 value cards
            self.append(Card(type,"0"))
            #Create 2 of each card numbered 1-9
            for n in range(1,10):
                self += [Card(type,str(n))] * 2
            #Create two of each action card of each color
            self += [Card(type,"Reverse")] * 2
            self += [Card(type,"Draw Two")] * 2
            self += [Card(type,"Skip")] * 2
        #Add the Wild cards
        self += [Card("Wild", "Draw Four")] * 4
        self += [Card("Wild", "Card")] * 4
        self.cardCount = len(self)
        random.shuffle(self)

    def grabTop(self):
        for i in range(self.cardCount):
            if self[i].type in types:
                self.top = self.removeCard(i+1)
                self.color = self.top.type
                return

    def insertCard(self,card):
        self.append(card)
        self.cardCount += 1
        self.top = card
        if self.top.type != "Wild":
            self.color = self.top.type

    def removeCard(self,n):
        removed = self.pop(n-1)
        self.cardCount -= 1
        if self.cardCount == 0:
            self.cardCount = len(self)
            random.shuffle(self)
        return removed

#Inherit deck as player to represent the player's hand
class Player(Deck):
    def __init__(self, human, name):
        self.cardCount = 0
        self.isPlayer = human
        self.name = name
    
    #Draws n cards from the drawing deck
    def draw(self, n, drawDeck):
        for i in range(n):
            if len(drawDeck) == 0:
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
            print(f"{i+1}:", end="")
            self[i].printCard()
    
    #Check if the hand has a card that can be played on the top of the used card pile
    def hasMatch(self, drawDeck):
        for i in range(self.cardCount):
            if self[i].type == drawDeck.color or self[i].value == drawDeck.top.value or self[i].type == "Wild":
                return (True, i+1)
        return (False, drawDeck.top)
    
    #Make the player choose which card to play on their turn if possible
    def getChoice(self, top, drawDeck):
        if self.hasMatch(drawDeck)[0] == False:
            print("You do not have any playable cards. Draw one card.")
            self.draw(1,drawDeck)
            print(f"You drew a {self[-1].type} {self[-1].value} card.")
            if self[-1].type == drawDeck.color or self[-1].value == top.value or self[-1].type == "Wild":
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
            if comp.type != drawDeck.color and comp.value != top.value and comp.type != "Wild":
                print(f"You must use a card that matches in color, value, or a wild card.")
                continue
            chosenCard = self.removeCard(chosenCard)
            return (True, chosenCard)

    #Run the turn for a given player
    def playerTurn(self,drawDeck,nextEffect):
    
        #If a skip turn effect is in play, skip the player's turn and draw cards
        if nextEffect == "Skip":
            print(f"{self.name}'s turn was skipped by a skip card!\n")
            return (False, "0")
        if nextEffect == "Draw Two":
            print(f"{self.name} lost their turn and must draw two cards!\n")
            self.draw(2, drawDeck)
            return (False, "0")
        if nextEffect == "Draw Four":
            print(f"{self.name} lost their turn and must draw four cards!\n")
            self.draw(4, drawDeck)
            return (False, "0")

        #If not a human player, run a different version of the turn without user input
        if self.isPlayer == False:
            return self.aiTurn(drawDeck)
        
        #Inform the player of the card they are playing against
        print(f"The card on top of the pile is a {drawDeck.color} {drawDeck.top.value}")
        print(f"You have {self.cardCount} cards.")
        self.printHand()
        chosenCard = self.getChoice(drawDeck.top, drawDeck)
        #If player was made to draw a card and card didn't match, move to next player's turn
        if chosenCard[0] == False:
            print("The card could not be played, ending your turn.\n")
            return (False, "0")
        drawDeck.insertCard(chosenCard[1])
        print(f"You played the {chosenCard[1].type} {chosenCard[1].value} card.\n")
        if chosenCard[1].type == "Wild":
            while True:
                print(f"You must pick which color to set the top of the pile to.")
                for i in range(typesCount):
                    print(f"{i+1}: {types[i]}")
                wildColor = input("Pick the number corresponding to the color:")
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
            print(f"{self.name}: One Card Left! Uno!\n")
        if self.cardCount == 0:
            #High value, proof-read finishing message
            print(f"congratulation! yo uare winree, {self.name}!\n")
            return (True, "0")
        else:
            return (False, chosenCard[1].value)
        
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
            print(f"{self.name} played the {chosenCard.type} {chosenCard.value} card.")
            if chosenCard.type == "Wild":
                wildColor = types[random.randrange(typesCount)]
                drawDeck.color = wildColor
                print(f"{self.name} set the color on top of the pile to {wildColor}.")
            if self.cardCount == 1:
                print(f"{self.name}: It's about to be over for you! Uno!\n")
            elif self.cardCount == 0:
                print(f"{self.name} has won the game!\n")
                return (True, "0")
        print("")
        return (False, chosenCard.value)

def main():
    #Initialize the playing deck
    drawDeck = Deck()
    drawDeck.grabTop()

    playerName = input("Please type in your name: ")
    players = [Player(True,playerName)]
    players[0].draw(7,drawDeck)
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
        players.append(Player(False,f"Bot{x+1}"))
        players[x+1].draw(7,drawDeck)
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
