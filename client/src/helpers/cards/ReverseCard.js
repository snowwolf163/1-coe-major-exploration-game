import Card from "./Card.js";

export default class ReverseCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "reverseCard";
    this.playerCardSprite = "reverse-card";
    this.opponentCardSprite = "reverse-card";
  }
}
