import CardBack from "./cards/CardBack";
import CourseCard from "./cards/CourseCard";
import DebtCard from "./cards/DebtCard";
import { MajorCard } from "./cards/MajorCard";
import {
  MajorBE,
  MajorCBE,
  MajorCIE,
  MajorCS,
  MajorECS,
} from "./cards/MajorCard";
import PlaceHolderCard from "./cards/PlaceHolderCard";
import LoadCard from "./cards/LoadCard";
import OverloadCard from "./cards/OverloadCard";
import SkipCard from "./cards/SkipCard";

export default class DeckHandler {
  constructor(scene) {
    this.dealCard = (x, y, name, type) => {
      console.log(x, y, name, type);
      let cards = {
        cardBack: new CardBack(scene),
        placeHolderCard: new PlaceHolderCard(scene),
        // action cards
        debtCard: new DebtCard(scene),
        loadCard: new LoadCard(scene),
        overLoadCard: new OverloadCard(scene),
        skipCard: new SkipCard(scene),
        // course cards
        courseCard: new CourseCard(scene), //placeholder
        // major cards
        majorCard: new MajorCard(scene), //placeholder
        majorBE: new MajorBE(scene),
        majorCBE: new MajorCBE(scene),
        majorCIE: new MajorCIE(scene),
        majorCS: new MajorCS(scene),
        majorECS: new MajorECS(scene),
      };
      let newCard = cards[name];
      newCard.data = x; //gives us x coord information for deck manipulation

      console.log(newCard);
      return newCard.render(x, y, type);
    };
  }
}
