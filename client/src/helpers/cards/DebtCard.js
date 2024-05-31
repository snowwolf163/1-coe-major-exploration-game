import Card from "./Card.js";

export default class DebtCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "debtCard";
    this.displayName = "Debt Card";
    this.displayDescription =
      "When this card is played, your opponent goes into a one-turn debt.";
    this.playerCardSprite = "debt-card";
    this.opponentCardSprite = "debt-card";
  }
}
