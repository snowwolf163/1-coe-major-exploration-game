import Card from "./Card.js";

export default class OverloadCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "overLoadCard";
    this.displayName = "Overload Card";
    this.displayDescription =
      "When this card is played, your opponent draws 2 cards";
    this.playerCardSprite = "overload-card";
    this.opponentCardSprite = "overload-card";
  }
}
