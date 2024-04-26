import CardBack from "./cards/CardBack";
import CourseCard from "./cards/CourseCard";
import {
  CourseCS46X,
  CourseCS261,
  CourseCS290,
  CourseCS344,
  CourseCS361,
  CourseCS362,
  CourseCS381,
  CourseCS391,
  CourseCS444,
  CourseCS475,
  CourseCHE444,
  CourseCHE499,
  CourseECE271,
  CourseECE322,
  CourseECE341,
  CourseECE351,
  CourseECE391,
  CourseENGR201,
  CourseENGR202,
  CourseENGR203,
  CoursePH211,
  CoursePH212,
  CoursePH481,
  CourseCS161,
  CourseCS162,
  CourseENGR100,
  CourseENGR102,
  CourseENGR103,
} from "./cards/CourseCard";
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
        // course cards
        courseCS46X: new CourseCS46X(scene),
        courseCS261: new CourseCS261(scene),
        courseCS290: new CourseCS290(scene),
        courseCS344: new CourseCS344(scene),
        courseCS361: new CourseCS361(scene),
        courseCS362: new CourseCS362(scene),
        courseCS381: new CourseCS381(scene),
        courseCS391: new CourseCS391(scene),
        courseCS444: new CourseCS444(scene),
        courseCS475: new CourseCS475(scene),
        courseCHE444: new CourseCHE444(scene),
        courseCHE499: new CourseCHE499(scene),
        courseECE271: new CourseECE271(scene),
        courseECE322: new CourseECE322(scene),
        courseECE341: new CourseECE341(scene),
        courseECE351: new CourseECE351(scene),
        courseECE391: new CourseECE391(scene),
        courseENGR201: new CourseENGR201(scene),
        courseENGR202: new CourseENGR202(scene),
        courseENGR203: new CourseENGR203(scene),
        coursePH211: new CoursePH211(scene),
        coursePH212: new CoursePH212(scene),
        coursePH481: new CoursePH481(scene),
        courseCS161: new CourseCS161(scene),
        courseCS162: new CourseCS162(scene),
        courseENGR100: new CourseENGR100(scene),
        courseENGR102: new CourseENGR102(scene),
        courseENGR103: new CourseENGR103(scene),

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
