//TODO: (things to make this animtaion testing into the final game)
// - card images will need to be turned into card objects, all references to them will need to be adjusted for this

import Phaser from "phaser";

export default class Animation_Testing extends Phaser.Scene {
  preload() {
    this.load.image("card", "../../assets/cards/mushroom2.png");
    // ... Load other assets as needed
  }

  create() {
    // GAME ENV //

    // Add right side "shelf" for highlighted cards //TODO: this should be hidden if no card is selected
    const cardShelf = this.add.rectangle(
      this.cameras.main.width, // x-coordinate, at the right edge of the screen
      0, // y-coordinate, at the top of the screen
      200, // width
      this.cameras.main.height, // height, stretching from top to bottom
      0xffffff // white color
    );
    cardShelf.setOrigin(1, 0); // set the origin to the top-right corner

    // DEALING CARDS //

    // Create a group for cards
    const cardsGroup = this.add.group();

    // Initial position for cards
    const initialX = this.cameras.main.width - 750;
    const initialY = this.cameras.main.height - 250; // Positioned x pixels above the bottom

    // Add card that always stays where stack is
    const deckTop = this.add.image(initialX, initialY, "card");

    // Add cards to the group and position them at the initial position
    for (let i = 0; i < 5; i++) {
      const card = this.add.image(initialX, initialY, "card").setInteractive();
      cardsGroup.add(card);

      // Set up the click event for each card
      card.on("pointerdown", () => {
        this.handleCardClick(card, cardsGroup);
        console.log("card clicked");
      });
    }

    // Animation configuration
    const duration = 1000; // Animation duration in milliseconds
    const delay = 200; // Delay between card animations

    // Player's hand position (center bottom)
    const handX = this.cameras.main.centerX;
    const handY = this.cameras.main.height;

    // Animate each card to move to the player's hand
    cardsGroup.children.each((card, index) => {
      this.tweens.add({
        targets: card,
        x: handX + (index - 2) * 60, // Adjust the x-position for each card to spread them out a bit
        y: handY,
        duration: duration,
        delay: index * delay,
        onComplete: () => {
          // This callback ensures the deck looks like it's always there
          // card.setVisible(false); // Hide the card after it lands //DO NOT UNCOMMENT THIS
          // this.add.image(card.x, card.y, "card"); // Add a new card back image at the same position
        },
      });
    });

    // HIGHLIGHTING A CARD ON CLICK //

    // Handle the card click logic
    this.handleCardClick = (clickedCard, playerHand) => {
      // If the card is already selected, move it down and deselect
      if (clickedCard.isSelected) {
        clickedCard.y += 20;
        clickedCard.isSelected = false;
      } else {
        // Deselect any other selected cards
        playerHand.children.each((card) => {
          if (card.isSelected) {
            card.y += 20;
            card.isSelected = false;
          }
        });

        // Move the clicked card up and mark it as selected
        clickedCard.y -= 20;
        clickedCard.isSelected = true;
      }
    };

    // "DISCARDING" AKA PLAYING A CARD //

    // Set discard pile position (next to "initial position")
    const discardX = this.cameras.main.centerX;
    const discardY = this.cameras.main.height - 250; // Positioned x pixels above the bottom

    // Add card that always stays where stack is //DEBUG TODO: replace with indication of stack, not a card
    const discardTop = this.add
      .image(discardX, discardY, "card")
      .setInteractive();

    // Set up the click event for discard pile
    discardTop.on("pointerdown", () => {
      this.handleDiscardClick(cardsGroup);
      console.log("card discarded");
    });

    // Handle card discard logic
    this.handleDiscardClick = (playerHand) => {
      //TODO: add discard logic: find selected card, move card to pile, remove from hand, draw new card, deselect played card

      // Find selected card in playerhand
      playerHand.children.each((card) => {
        if (card.isSelected) {
          console.log(card);
        }
      });
    };
  }
}
