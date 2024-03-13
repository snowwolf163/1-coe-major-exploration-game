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
        DebtCard: new DebtCard(scene),
        CourseCard: new CourseCard(scene),
        MajorCard: new MajorCard(scene),
        LoadCard: new LoadCard(scene),
        OverloadCard: new OverloadCard(scene),
        ReverseCard: new ReverseCard(scene),
        SkipCard: new SkipCard(scene),
      };
      let newCard = cards[name];
      return newCard.render(x, y, type);
    };
  }
}
