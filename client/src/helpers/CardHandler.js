export default class CardHandler {
  constructor() {
    this.flipCard = (card) => {
      if (card.data.values.type === "playerCard") {
        if (card.texture.key === "placeholder-card-back") {
          card.setTexture(card.data.values.sprite);
        } else {
          card.setTexture("placeholder-card-back");
        }
      } else if (card.data.values.type === "opponentCard") {
        if (card.texture.key === "placeholder-card-back") {
          card.setTexture(card.data.values.sprite);
        } else {
          card.setTexture("placeholder-card-back");
        }
      }
    };
  }
}
