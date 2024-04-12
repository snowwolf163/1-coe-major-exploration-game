import CardBack from "./cards/CardBack";
import CourseCard from "./cards/CourseCard";
import DebtCard from "./cards/DebtCard";
import MajorCard from "./cards/MajorCard";
import PlaceHolderCard from "./cards/PlaceHolderCard";
import LoadCard from "./cards/LoadCard";
import OverloadCard from "./cards/OverloadCard";
import ReverseCard from "./cards/ReverseCard";
import SkipCard from "./cards/SkipCard";

export default class DeckHandler {
  constructor(scene) {
    this.dealCard = (x, y, name, type) => {
      console.log(x, y, name, type);
      let cards = {
        cardBack: new CardBack(scene),
        placeHolderCard: new PlaceHolderCard(scene),
        debtCard: new DebtCard(scene),
        courseCard: new CourseCard(scene),
        majorCard: new MajorCard(scene),
        loadCard: new LoadCard(scene),
        overLoadCard: new OverloadCard(scene),
        reverseCard: new ReverseCard(scene),
        skipCard: new SkipCard(scene),
      };
      let newCard = cards[name];
      console.log(newCard);
      return newCard.render(x, y, type);
    };
  }
}
