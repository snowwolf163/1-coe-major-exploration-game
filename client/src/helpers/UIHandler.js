import ZoneHandler from "./ZoneHandler";

export default class UIHandler {
  constructor(scene) {
    this.ZoneHandler = new ZoneHandler(scene);

    this.buildZones = () => {
      scene.dropZone = this.ZoneHandler.renderZone(470, 500);
      this.ZoneHandler.renderOutline(scene.dropZone);
    };

    this.buildPlayerAreas = () => {
      scene.playerHandArea = scene.add.rectangle(470, 860, 850, 230);
      scene.playerHandArea.setStrokeStyle(2, "#000000");

      scene.opponentHandArea = scene.add.rectangle(470, 135, 850, 230);
      scene.opponentHandArea.setStrokeStyle(2, "#000000");

      scene.deckArea = scene.add.rectangle(750, 500, 155, 215);
      scene.deckArea.setStrokeStyle(2, 0xffffff);
    };

    this.buildGameText = () => {
      scene.dealCards = scene.add
        .text(700, 650, "Deal Cards")
        .setFontSize(20)
        .setFontFamily("Trebuchet MS");
    };

    this.buildShelf = () => {
      scene.cardShelf = scene.add.rectangle(
        1175,
        200,
        250,
        600,
        0x999999 // gray color
      );
      scene.cardShelf.setOrigin(1, 0); // set the origin to the top-right corner
    };

    this.buildWinScreen = () => {
      const rectWidth = 600;
      const rectHeight = 300;
      const rectX = (scene.game.config.width - rectWidth) / 2;
      const rectY = (scene.game.config.height - rectHeight) / 2;
      scene.winScreen = scene.add.rectangle(
        rectX + rectWidth / 2,
        rectY + rectHeight / 2,
        rectWidth,
        rectHeight,
        0xffffff
      );
      scene.winScreen.setOrigin(0.5);
      const gameOverText = scene.add.text(
        rectX + rectWidth / 2,
        rectY + rectHeight / 2,
        "Game Over",
        {
          fontSize: "32px",
          fill: "#000000", // Text color
        }
      );
      gameOverText.setOrigin(0.5);
    };

    this.buildUI = () => {
      console.log("building UI");
      this.buildZones();
      this.buildGameText();
      this.buildPlayerAreas();
      this.buildShelf();
      // this.buildWinScreen();
    };
  }
}
