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

      scene.plusOne = scene.add
        .text(400, 700, "End Turn & Draw")
        .setFontSize(20)
        .setFontFamily("Trebuchet MS");
      // .inputEnabled(true);
      // console.log(scene.plusOne);
      // console.log(scene.dealCards);
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

    //winner should be t or f
    this.buildWinScreen = (winner) => {
      let winScreenText;
      if (winner) {
        winScreenText = "You Win!";
      } else {
        winScreenText = "Game Over!";
      }
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
        winScreenText,
        {
          fontSize: "32px",
          fill: "#000000", // Text color
        }
      );
      gameOverText.setOrigin(0.5);
    };

    this.buildLoadingScreen = () => {
      const rectWidth = 600;
      const rectHeight = 300;
      const rectX = (scene.game.config.width - rectWidth) / 2;
      const rectY = (scene.game.config.height - rectHeight) / 2;
      scene.loadingContainer = scene.add.container(
        rectX + rectWidth / 2,
        rectY + rectHeight / 2
      );
      scene.loadingScreen = scene.add.rectangle(
        0,
        0,
        rectWidth,
        rectHeight,
        0xffffff
      );
      scene.loadingContainer.add(scene.loadingScreen);
      const loadingSprite = scene.add.sprite(0, 0, "loading");
      scene.loadingContainer.add(loadingSprite);
      loadingSprite.setScale(0.5);
      scene.tweens.add({
        targets: loadingSprite,
        rotation: -Math.PI * 2,
        duration: 1000,
        repeat: -1, // Infinite loop
      });

      const loadingScreenText = scene.add.text(
        0,
        -rectHeight / 4, // Position the text above the center
        "waiting for opponent...",
        {
          fontSize: "32px",
          fill: "#000000", // Text color
        }
      );
      scene.loadingContainer.add(loadingScreenText);
      loadingScreenText.setOrigin(0.5);
      loadingSprite.setPosition(0, rectHeight / 4); // Position below the text
    };

    this.removeLoadingScreen = () => {
      if (scene.loadingContainer) {
        scene.loadingContainer.destroy(); // Destroy the loading container and all its children
        scene.loadingContainer = null; // Set the reference to null to indicate it's no longer in use
      }
    };

    this.buildUI = () => {
      console.log("building UI");
      this.buildZones();
      this.buildGameText();
      this.buildPlayerAreas();
      this.buildShelf();
      this.buildLoadingScreen();
    };
  }
}
