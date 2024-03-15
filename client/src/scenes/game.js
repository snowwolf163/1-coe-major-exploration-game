import CardHandler from "../helpers/CardHandler";
import DeckHandler from "../helpers/DeckHandler";
import GameHandler from "../helpers/GameHandler";
import InteractiveHandler from "../helpers/InteractiveHandler";
import SocketHandler from "../helpers/SocketHandler";
import UIHandler from "../helpers/UIHandler";

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
  }

  preload() {
    this.load.image(
      "placeholder-card-back",
      "src/assets/BackCover/card-back.jpg"
    );
    this.load.image("placeholder-card", "src/assets/placeholder-card.png");
    this.load.image("debt-card", "src/assets/ActionCard/debt-card.jpg");
    this.load.image("load-card", "src/assets/ActionCard/load-card.jpg");
    this.load.image("overload-card", "src/assets/ActionCard/overload-card.jpg");
    this.load.image("reverse-card", "src/assets/ActionCard/reverse-card.jpg");
    this.load.image("skip-card", "src/assets/ActionCard/skip-card.jpg");

    // placeholders for course and major cards for now
    this.load.image("course-card", "src/assets/CourseCard/CS-161.jpg");
    this.load.image("major-card", "src/assets/MajorCard/MajorCS.jpg");

    //placeholder for loading circle animation
    this.load.image("loading", "src/assets/loading.png");
  }

  create() {
    this.CardHandler = new CardHandler();
    this.DeckHandler = new DeckHandler(this);
    this.GameHandler = new GameHandler(this);
    this.SocketHandler = new SocketHandler(this);
    this.UIHandler = new UIHandler(this);
    this.UIHandler.buildUI();
    this.InteractiveHandler = new InteractiveHandler(this);
  }

  update() {}
}
