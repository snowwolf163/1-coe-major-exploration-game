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
  type: Phaser.CANVAS, // this means phaser handles if webgl or canvas is used
  backgroundColor: "#7f7f7f",
  physics: {
    // this is set for pong purposes..
    // default: "arcade",
    // arcade: {
    //   gravity: { y: 0 },
    //   debug: true,
    // },
  },
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update,
  // },
};

const game = new Phaser.Game(config);

//game.scene.add("titlescreen", TitleScreen);
// game.scene.add("game", Game);
// game.scene.add("background", Background);
// game.scene.add("win", WinScreen);
// game.scene.add("loss", LossScreen);
game.scene.add("animation testing", Animation_Testing);

game.scene.start("animation testing");
