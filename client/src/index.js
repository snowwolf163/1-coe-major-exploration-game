import Phaser from "phaser";
import Game from "./scenes/game.js";
import { Menu } from "./scenes/menu.js";

let config = {
  type: Phaser.AUTO,
  backgroundColor: "#d73f09",
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1200,
    height: 1000,
  },
  parent: "game-container", // Specify the parent container
  scene: [Menu, Game],
};

const game = new Phaser.Game(config);
