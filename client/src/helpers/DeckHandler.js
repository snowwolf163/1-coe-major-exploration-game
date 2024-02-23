import CardBack from "./cards/CardBack";
import PlaceHolderCard from "./cards/PlaceHolderCard";

export default class DeckHandler {
  constructor(scene) {
    this.dealCard = (x, y, name, type) => {
      let cards = {
        cardBack: new CardBack(scene),
        placeHolderCard: new PlaceHolderCard(scene),
      };
      let newCard = cards[name];
      return newCard.render(x, y, type);
    };
  }
}
