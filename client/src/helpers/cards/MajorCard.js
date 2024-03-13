import Card from "./Card.js";

export default class MajorCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCard";
    this.playerCardSprite = "major-card";
    this.opponentCardSprite = "major-card";
  }
}
