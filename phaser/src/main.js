import Phaser from "phaser";
import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";
import Background from "./scenes/Background";
import WinScreen from "./scenes/WinScreen";
import LossScreen from "./scenes/LossScreen";
import Animation_Testing from "./scenes/Animation-Testing";

const config = {
  width: 800,
  height: 500,
  // margin: 50,
  type: Phaser.CANVAS, // this means phaser handles if webgl or canvas is used
  backgroundColor: "#d73f09",
};

const game = new Phaser.Game(config);

game.scene.add("titlescreen", TitleScreen);
game.scene.add("animation testing", Animation_Testing);

game.scene.start("titlescreen");
