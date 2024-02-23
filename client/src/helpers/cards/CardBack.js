import Card from "./Card.js";

export default class CardBack extends Card {
  constructor(scene) {
    super(scene);
    this.name = "cardBack";
    this.playerCardSprite = "placeholder-card-back";
    this.opponentCardSprite = "placeholder-card-back";
  }
}
