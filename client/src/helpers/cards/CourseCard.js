import Card from "./Card.js";

export default class CourseCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCard";
    this.playerCardSprite = "course-card";
    this.opponentCardSprite = "course-card";
  }
}
