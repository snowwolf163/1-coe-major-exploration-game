import Card from "./Card.js";

export default class PlaceHolderCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "placeHolderCard";
    this.playerCardSprite = "placeholder-card";
    this.opponentCardSprite = "placeholder-card";
  }
}
