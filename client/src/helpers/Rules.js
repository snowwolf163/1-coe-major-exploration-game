//Put this in the helpers folder
//Use this function in interactive handler 

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
    MajorARE,
    MajorBEE,
    MajorBIOE,
    MajorCE,
    MajorCEM,
    MajorCHE,
    MajorCS,
    MajorECS,
    MajorENVE,
    MajorESE,
    MajorIE,
    MajorME,
    MajorNSE,
    MajorRHP,
} from "./cards/MajorCard";
import PlaceHolderCard from "./cards/PlaceHolderCard";
import LoadCard from "./cards/LoadCard";
import OverloadCard from "./cards/OverloadCard";
import SkipCard from "./cards/SkipCard";


exports.gameRules = function (previousCard, currentCard) {

    const eventCards = ['debtCard', 'loadCard', 'overLoadCard'];

    //Assuming event cards are typeless, playing them or a mahor card has no effect. Same with playing any card after an event card. 
    if (currentCard.name[0] === 'm' || eventCards.includes(currentCard.name) || eventCards.includes(previousCard.name) || previousCard == null) {
        return true;
    }

    if (previousCard.name[0] === 'm' && currentCard.name[0] === 'c') {
        if (previousCard.name === currentCard.majorCardParent) {
            return true;
        } else {
            return false;
        }
    }
    else if (previousCard.name[0] === 'c' && currentCard.name[0] === 'c') {
        //Checks to see if the first character of the course number is equal tier or if they have the same parent
        if ((previousCard.name.length - 3 === currentCard.name.length - 3) || previousCard.majorCardParent === currentCard.majorCardParent) {
            return true;
        }
    }
    
    return false;
}