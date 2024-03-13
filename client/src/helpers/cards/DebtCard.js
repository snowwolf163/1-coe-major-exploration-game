import Card from "./Card.js";

export default class DebtCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "debtCard";
    this.playerCardSprite = "debt-card";
    this.opponentCardSprite = "debt-card";
  }
}
