import Card from "./Card.js";

export default class LoadCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "loadCard";
    this.playerCardSprite = "load-card";
    this.opponentCardSprite = "load-card";
  }
}
