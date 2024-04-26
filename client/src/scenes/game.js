import CardHandler from "../helpers/CardHandler";
import DeckHandler from "../helpers/DeckHandler";
import GameHandler from "../helpers/GameHandler";
import InteractiveHandler from "../helpers/InteractiveHandler";
import SocketHandler from "../helpers/SocketHandler";
import UIHandler from "../helpers/UIHandler";

//testing

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

    // action cards
    this.load.image("debt-card", "src/assets/ActionCard/debt-card.jpg");
    this.load.image("load-card", "src/assets/ActionCard/load-card.jpg");
    this.load.image("overload-card", "src/assets/ActionCard/overload-card.jpg");
    // this.load.image("reverse-card", "src/assets/ActionCard/reverse-card.jpg");
    this.load.image("skip-card", "src/assets/ActionCard/skip-card.jpg");

    // placeholders for course and major cards for now
    this.load.image("course-card", "src/assets/CourseCard/CS-161.jpg");
    this.load.image("major-card", "src/assets/MajorCard/MajorCS.jpg");

    // major cards
    this.load.image("major-BE", "src/assets/MajorCard/MajorBE.jpg");
    this.load.image("major-CBE", "src/assets/MajorCard/MajorCBE.jpg");
    this.load.image("major-CIE", "src/assets/MajorCard/MajorCIE.jpg");
    this.load.image("major-CS", "src/assets/MajorCard/MajorCS.jpg");
    this.load.image("major-ECS", "src/assets/MajorCard/MajorECS.jpg");

    // course cards
    // -- CS courses
    this.load.image("course-CS46X", "src/assets/CourseCard/CS/CS-46X.jpg");
    this.load.image("course-CS261", "src/assets/CourseCard/CS/CS-261.jpg");
    this.load.image("course-CS290", "src/assets/CourseCard/CS/CS-290.jpg");
    this.load.image("course-CS344", "src/assets/CourseCard/CS/CS-344.jpg");
    this.load.image("course-CS361", "src/assets/CourseCard/CS/CS-361.jpg");
    this.load.image("course-CS362", "src/assets/CourseCard/CS/CS-362.jpg");
    this.load.image("course-CS381", "src/assets/CourseCard/CS/CS-381.jpg");
    this.load.image("course-CS391", "src/assets/CourseCard/CS/CS-391.jpg");
    this.load.image("course-CS444", "src/assets/CourseCard/CS/CS-444.jpg");
    this.load.image("course-CS475", "src/assets/CourseCard/CS/CS-475.jpg");
    // -- ECE courses
    this.load.image("course-CHE444", "src/assets/CourseCard/ECE/CHE-444.jpg");
    this.load.image("course-CHE499", "src/assets/CourseCard/ECE/CHE-499.jpg");
    this.load.image("course-ECE271", "src/assets/CourseCard/ECE/ECE-271.jpg");
    this.load.image("course-ECE322", "src/assets/CourseCard/ECE/ECE-322.jpg");
    this.load.image("course-ECE341", "src/assets/CourseCard/ECE/ECE-341.jpg");
    this.load.image("course-ECE351", "src/assets/CourseCard/ECE/ECE-351.jpg");
    this.load.image("course-ECE391", "src/assets/CourseCard/ECE/ECE-391.jpg");
    this.load.image("course-ENGR201", "src/assets/CourseCard/ECE/ENGR-201.jpg");
    this.load.image("course-ENGR202", "src/assets/CourseCard/ECE/ENGR-202.jpg");
    this.load.image("course-ENGR203", "src/assets/CourseCard/ECE/ENGR-203.jpg");
    this.load.image("course-PH211", "src/assets/CourseCard/ECE/PH-211.jpg");
    this.load.image("course-PH212", "src/assets/CourseCard/ECE/PH-212.jpg");
    this.load.image("course-PH481", "src/assets/CourseCard/ECE/PH-481.jpg");
    // -- "multi" courses
    this.load.image("course-CS161", "src/assets/CourseCard/CS-161.jpg");
    this.load.image("course-CS162", "src/assets/CourseCard/CS-162.jpg");
    this.load.image("course-ENGR100", "src/assets/CourseCard/ENGR-100.jpg");
    this.load.image("course-ENGR102", "src/assets/CourseCard/ENGR-102.jpg");
    this.load.image("course-ENGR103", "src/assets/CourseCard/ENGR-103.jpg");

    // loading circle animation
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
