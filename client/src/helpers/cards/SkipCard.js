import Card from "./Card.js";

// NO LONGER IN USE

export default class SkipCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "skipCard";
    this.playerCardSprite = "skip-card";
    this.opponentCardSprite = "skip-card";
  }
}
