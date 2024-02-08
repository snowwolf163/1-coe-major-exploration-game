//TODO: (things to make this animtaion testing into the final game)
// - card images will need to be turned into card objects, all references to them will need to be adjusted for this
// - ((maybes)) if background is clicked any selected card should be deselected ??

import Phaser from "phaser";

// Card Object class //TODO: this is unused so far
class Card extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.isSelected = false;
  }
}

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
      // const card = new Card(this, initialX, initialY, "card").setInteractive;
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
        onComplete: () => {},
      });
    });

    // HIGHLIGHTING A CARD ON CLICK //

    // Manage Shelf consts for selected cards
    const scaleMultiplier = 3; // Adjust this value to increase or decrease the scale
    const highlightX = 700;
    const highlightY = 250;

    // Handle the card click logic
    this.handleCardClick = (clickedCard, playerHand) => {
      // If the card is already selected, move it down and deselect
      if (clickedCard.isSelected) {
        clickedCard.y += 20;
        clickedCard.isSelected = false;
        // shelfCard.destroy;
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

        // TODO: finish this logic (deselect = no more shelf card, playing a card = no more shelf card etc.)
        // Copy card onto highlighted "shelf" card
        const shelfCard = this.add
          .image(highlightX, highlightY, "card")
          .setInteractive()
          .setScale(scaleMultiplier);
      }
    };

    // TODO: Handle selected card also appearing in "shelf"

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
      // Find selected card in playerhand
      playerHand.children.each((card) => {
        if (card.isSelected) {
          console.log(card);

          // Get this cards x and y for replacement later
          var discardedCardX = card.x;
          var discardedCardY = card.y + 20; // Add 20 because when selected it gives Y -20

          // Deselect selected card
          card.isSelected = false;

          // Remove card from playerhand and move it to discard pile
          this.tweens.add({
            targets: card,
            x: discardX, // Adjust the x-position for each card to spread them out a bit
            y: discardY,
            duration: duration,
            onComplete: () => {
              playerHand.remove(card);
              card.setDepth(1); // Ensure it's above the shelf

              // TODO: save the card data here and update the discard pile placeholder to reflect the last played card to
              // "simulate" it's still there while not messing with the interactivity
              card.destroy();

              // Draw new card and add to playerhand
              const newCard = this.add
                .image(initialX, initialY, "card")
                .setInteractive();
              cardsGroup.add(newCard);

              // TODO: ANIMATION DEMO PURPOSES ONLY, UNO ONLY DRAWS A CARD IF NO CARD CAN BE PLAYED //
              // New cards animate into players hand using discarded cards x and y
              this.tweens.add({
                targets: newCard,
                x: discardedCardX,
                y: discardedCardY,
                duration: duration,
                onComplete: () => {
                  console.log("new card added to hand");
                },
              });
            },
          });

          return;
        }
      });
    };
  }
}
