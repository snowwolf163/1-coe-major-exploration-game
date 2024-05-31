import Card from "./Card.js";

export default class LoadCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "loadCard";
    this.displayName = "Load Card";
    this.displayDescription =
      "When this card is played, your opponent draws 2 cards and misses their turn.";
    this.playerCardSprite = "load-card";
    this.opponentCardSprite = "load-card";
  }
}
