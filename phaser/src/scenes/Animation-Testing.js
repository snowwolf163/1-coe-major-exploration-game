import Phaser from "phaser";

export default class Animation_Testing extends Phaser.Scene {
  // constructor() {
  //   super({ key: "animation testing" });
  // }
  preload() {
    this.load.image("card", "../../assets/cards/mushroom2.png");
    // ... Load other assets as needed
  }

  create() {
    // DEALING CARDS //

    // Create a group for cards
    const cardsGroup = this.add.group();

    // Initial position for cards at the bottom center of the screen
    const initialX = this.cameras.main.centerX;
    const initialY = this.cameras.main.height - 250; // Positioned 100 pixels above the bottom

    // Add card that always stays where stack is
    const deckTop = this.add.image(initialX, initialY, "card");

    // Add cards to the group and position them at the initial position
    for (let i = 0; i < 5; i++) {
      const card = this.add.image(initialX, initialY, "card");
      cardsGroup.add(card);
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
          card.setVisible(false); // Hide the card after it lands
          this.add.image(card.x, card.y, "card"); // Add a new card back image at the same position
        },
      });
    });
  }
}
