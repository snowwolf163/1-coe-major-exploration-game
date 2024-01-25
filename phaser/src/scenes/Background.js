import Phaser from "phaser";

export default class Background extends Phaser.Scene {
  preload() {}
  create() {
    //console.log("here");
    this.add.line(300, 250, 100, 500, 100, 0, 0xffffff, 1);
  }
}
