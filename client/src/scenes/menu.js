import { Scene } from "phaser";

export class Menu extends Scene {
  constructor() {
    super({
      key: "Menu",
    });
  }

  create() {
    // Create title text
    const title = this.add.text(600, 500, "OSUno", {
      fontSize: 60,
      fontFamily: "Arial",
      color: "#ffffff",
    });
    title.setOrigin(0.5, 0.5);

    // Create a start button with rounded edges and grey background
    const startButton = this.add
      .text(600, 575, "Start", {
        fontSize: 25,
        fontFamily: "Arial",
        color: "#ffffff",
        backgroundColor: "#808080",
        padding: {
          x: 20,
          y: 10,
        },
        // borderRadius: 50, // Set border radius for rounded edges
      })
      .setOrigin(0.5, 0.5)
      .setInteractive();

    // Set up event handler for button click
    startButton.on("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
