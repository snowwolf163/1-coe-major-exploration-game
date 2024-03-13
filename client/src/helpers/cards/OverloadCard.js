import Card from "./Card.js";

export default class OverloadCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "overLoadCard";
    this.playerCardSprite = "overload-card";
    this.opponentCardSprite = "overload-card";
  }
}
