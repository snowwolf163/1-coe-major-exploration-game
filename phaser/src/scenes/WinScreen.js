import Phaser from "phaser";

export default class WinScreen extends Phaser.Scene {
  preload() {}
  create() {
    const title = this.add.text(400, 250, "You Win!", {
      fontSize: 50,
      fontFamily: "arial",
    });
    title.setOrigin(0.5, 0.5);

    const subtitle = this.add.text(400, 350, "Press Space to Play Again", {
      fontSize: 25,
      fontFamily: "arial",
    });
    subtitle.setOrigin(0.5, 0.5);

    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("game");
    });
  }
}
