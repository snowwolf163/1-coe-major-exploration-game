import Card from "./Card.js";

export default class CourseCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCard";
    this.displayName = "Course Card";
    this.playerCardSprite = "course-card";
    this.opponentCardSprite = "course-card";
  }
}

// CS courses

export class CourseCS46X extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS46X";
    // this.displayName = "CS46X - ";
    this.playerCardSprite = "course-CS46X";
    this.opponentCardSprite = "course-CS46X";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS261 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS261";
    this.playerCardSprite = "course-CS261";
    this.opponentCardSprite = "course-CS261";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS290 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS290";
    this.playerCardSprite = "course-CS290";
    this.opponentCardSprite = "course-CS290";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS344 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS344";
    this.playerCardSprite = "course-CS344";
    this.opponentCardSprite = "course-CS344";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS361";
    this.playerCardSprite = "course-CS361";
    this.opponentCardSprite = "course-CS361";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS362 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS362";
    this.playerCardSprite = "course-CS362";
    this.opponentCardSprite = "course-CS362";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS381";
    this.playerCardSprite = "course-CS381";
    this.opponentCardSprite = "course-CS381";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS391";
    this.playerCardSprite = "course-CS391";
    this.opponentCardSprite = "course-CS391";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS444";
    this.playerCardSprite = "course-CS444";
    this.opponentCardSprite = "course-CS444";
    this.majorCardParent = ["majorCS"];
  }
}

export class CourseCS475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS475";
    this.playerCardSprite = "course-CS475";
    this.opponentCardSprite = "course-CS475";
    this.majorCardParent = ["majorCS"];
  }
}

// ECE courses

export class CourseCHE444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE444";
    this.playerCardSprite = "course-CHE444";
    this.opponentCardSprite = "course-CHE444";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseCHE499 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE499";
    this.playerCardSprite = "course-CHE499";
    this.opponentCardSprite = "course-CHE499";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE271 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE271";
    this.playerCardSprite = "course-ECE271";
    this.opponentCardSprite = "course-ECE271";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE322";
    this.playerCardSprite = "course-ECE322";
    this.opponentCardSprite = "course-ECE322";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE341";
    this.playerCardSprite = "course-ECE341";
    this.opponentCardSprite = "course-ECE341";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE351 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE351";
    this.playerCardSprite = "course-ECE351";
    this.opponentCardSprite = "course-ECE351";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseECE391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE391";
    this.playerCardSprite = "course-ECE391";
    this.opponentCardSprite = "course-ECE391";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR201";
    this.playerCardSprite = "course-ENGR201";
    this.opponentCardSprite = "course-ENGR201";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR202 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR202";
    this.playerCardSprite = "course-ENGR202";
    this.opponentCardSprite = "course-ENGR202";
    this.majorCardParent = ["majorECE"];
  }
}

export class CourseENGR203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR203";
    this.playerCardSprite = "course-ENGR203";
    this.opponentCardSprite = "course-ENGR203";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH211 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH211";
    this.playerCardSprite = "course-PH211";
    this.opponentCardSprite = "course-PH211";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH212";
    this.playerCardSprite = "course-PH212";
    this.opponentCardSprite = "course-PH212";
    this.majorCardParent = ["majorECE"];
  }
}

export class CoursePH481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH481";
    this.playerCardSprite = "course-PH481";
    this.opponentCardSprite = "course-PH481";
    this.majorCardParent = ["majorECE"];
  }
}

// "multi" courses

export class CourseCS161 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS161";
    this.playerCardSprite = "course-CS161";
    this.opponentCardSprite = "course-CS161";
    this.majorCardParent = ["majorECE", "majorCS"];
  }
}

export class CourseCS162 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS162";
    this.playerCardSprite = "course-CS162";
    this.opponentCardSprite = "course-CS162";
    this.majorCardParent = ["majorECE", "majorCS"];
  }
}

export class CourseENGR100 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR100";
    this.playerCardSprite = "course-ENGR100";
    this.opponentCardSprite = "course-ENGR100";
    this.majorCardParent = ["majorECE", "majorCS"];
  }
}

export class CourseENGR102 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR102";
    this.playerCardSprite = "course-ENGR102";
    this.opponentCardSprite = "course-ENGR102";
    this.majorCardParent = ["majorECE", "majorCS"];
  }
}

export class CourseENGR103 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR103";
    this.playerCardSprite = "course-ENGR103";
    this.opponentCardSprite = "course-ENGR103";
    this.majorCardParent = ["majorECE", "majorCS"];
  }
}

// ARE Courses

export class CourseARE310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE310";
    this.playerCardSprite = "course-ARE310";
    this.opponentCardSprite = "course-ARE310";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE311";
    this.playerCardSprite = "course-ARE311";
    this.opponentCardSprite = "course-ARE311";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE310";
    this.playerCardSprite = "course-ARE341";
    this.opponentCardSprite = "course-ARE341";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE361";
    this.playerCardSprite = "course-ARE361";
    this.opponentCardSprite = "course-ARE361";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE418 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE418";
    this.playerCardSprite = "course-ARE418";
    this.opponentCardSprite = "course-ARE418";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE419 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE419";
    this.playerCardSprite = "course-ARE419";
    this.opponentCardSprite = "course-ARE419";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE451 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE451";
    this.playerCardSprite = "course-ARE451";
    this.opponentCardSprite = "course-ARE451";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE461 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE461";
    this.playerCardSprite = "course-ARE461";
    this.opponentCardSprite = "course-ARE461";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseARE462 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE462";
    this.playerCardSprite = "course-ARE462";
    this.opponentCardSprite = "course-ARE462";
    this.majorCardParent = ["majorARE"];
  }
}

export class CourseCE381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE381";
    this.playerCardSprite = "course-CE381";
    this.opponentCardSprite = "course-CE381";
    this.majorCardParent = ["majorARE"];
  }
}

// BEE Courses

export class CourseBEE221 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE221";
    this.playerCardSprite = "course-BEE221";
    this.opponentCardSprite = "course-BEE221";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE222 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE222";
    this.playerCardSprite = "course-BEE222";
    this.opponentCardSprite = "course-BEE222";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE270 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE270";
    this.playerCardSprite = "course-BEE270";
    this.opponentCardSprite = "course-BEE270";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE312 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE312";
    this.playerCardSprite = "course-BEE312";
    this.opponentCardSprite = "course-BEE312";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE322";
    this.playerCardSprite = "course-BEE322";
    this.opponentCardSprite = "course-BEE322";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE361";
    this.playerCardSprite = "course-BEE361";
    this.opponentCardSprite = "course-BEE361";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE362 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE362";
    this.playerCardSprite = "course-BEE362";
    this.opponentCardSprite = "course-BEE362";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE415";
    this.playerCardSprite = "course-BEE415";
    this.opponentCardSprite = "course-BEE415";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE468 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE468";
    this.playerCardSprite = "course-BEE468";
    this.opponentCardSprite = "course-BEE468";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE481";
    this.playerCardSprite = "course-BEE481";
    this.opponentCardSprite = "course-BEE481";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE482 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE482";
    this.playerCardSprite = "course-BEE482";
    this.opponentCardSprite = "course-BEE482";
    this.majorCardParent = ["majorBEE"];
  }
}

export class CourseBEE483 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE483";
    this.playerCardSprite = "course-BEE483";
    this.opponentCardSprite = "course-BEE483";
    this.majorCardParent = ["majorBEE"];
  }
}

// BIOE Courses
export class CourseBI231 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBI231";
    this.playerCardSprite = "course-BI231";
    this.opponentCardSprite = "course-BI231";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE240 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE240";
    this.playerCardSprite = "course-BIOE240";
    this.opponentCardSprite = "course-BIOE240";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE311";
    this.playerCardSprite = "course-BIOE311";
    this.opponentCardSprite = "course-BIOE311";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE331";
    this.playerCardSprite = "course-BIOE331";
    this.opponentCardSprite = "course-BIOE331";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE340 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE340";
    this.playerCardSprite = "course-BIOE340";
    this.opponentCardSprite = "course-BIOE340";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE350 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE350";
    this.playerCardSprite = "course-BIOE350";
    this.opponentCardSprite = "course-BIOE350";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE420 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE420";
    this.playerCardSprite = "course-BIOE420";
    this.opponentCardSprite = "course-BIOE420";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE457 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE457";
    this.playerCardSprite = "course-BIOE457";
    this.opponentCardSprite = "course-BIOE457";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseBIOE465 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBIOE465";
    this.playerCardSprite = "course-BIOE465";
    this.opponentCardSprite = "course-BIOE465";
    this.majorCardParent = ["majorBIOE"];
  }
}

export class CourseCBBE212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCBBE212";
    this.playerCardSprite = "course-CBBE212";
    this.opponentCardSprite = "course-CBBE212";
    this.majorCardParent = ["majorBIOE"];
  }
}

// CE Courses
export class CourseCCE201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE201";
    this.playerCardSprite = "course-CCE201";
    this.opponentCardSprite = "course-CCE201";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCCE207 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE207";
    this.playerCardSprite = "course-CCE207";
    this.opponentCardSprite = "course-CCE207";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE202 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE202";
    this.playerCardSprite = "course-CE202";
    this.opponentCardSprite = "course-CE202";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE311";
    this.playerCardSprite = "course-CE311";
    this.opponentCardSprite = "course-CE311";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE313 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE313";
    this.playerCardSprite = "course-CE313";
    this.opponentCardSprite = "course-CE313";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE361";
    this.playerCardSprite = "course-CE361";
    this.opponentCardSprite = "course-CE361";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE371 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE371";
    this.playerCardSprite = "course-CE371";
    this.opponentCardSprite = "course-CE371";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE372 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE372";
    this.playerCardSprite = "course-CE372";
    this.opponentCardSprite = "course-CE372";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE412";
    this.playerCardSprite = "course-CE412";
    this.opponentCardSprite = "course-CE412";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE481";
    this.playerCardSprite = "course-CE481";
    this.opponentCardSprite = "course-CE481";
    this.majorCardParent = ["majorCE"];
  }
}

export class CourseCE491 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE491";
    this.playerCardSprite = "course-CE491";
    this.opponentCardSprite = "course-CE491";
    this.majorCardParent = ["majorCE"];
  }
}
// CEM Courses
export class CourseCCEM201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCEM201";
    this.playerCardSprite = "course-CCEM201";
    this.opponentCardSprite = "course-CCEM201";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCCE203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE203";
    this.playerCardSprite = "course-CCE203";
    this.opponentCardSprite = "course-CCE203";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCCE321 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCCE321";
    this.playerCardSprite = "course-CCE321";
    this.opponentCardSprite = "course-CCE321";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCE427 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE427";
    this.playerCardSprite = "course-CE427";
    this.opponentCardSprite = "course-CE427";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM341";
    this.playerCardSprite = "course-CEM341";
    this.opponentCardSprite = "course-CEM341";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM381";
    this.playerCardSprite = "course-CEM381";
    this.opponentCardSprite = "course-CEM381";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM441 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM441";
    this.playerCardSprite = "course-CEM441";
    this.opponentCardSprite = "course-CEM441";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM471 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM471";
    this.playerCardSprite = "course-CEM471";
    this.opponentCardSprite = "course-CEM471";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseCEM472 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCEM472";
    this.playerCardSprite = "course-CEM472";
    this.opponentCardSprite = "course-CEM472";
    this.majorCardParent = ["majorCEM"];
  }
}

export class CourseECON201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECON201";
    this.playerCardSprite = "course-ECON201";
    this.opponentCardSprite = "course-ECON201";
    this.majorCardParent = ["majorCEM"];
  }
}

// CHE Courses
export class CourseCH231 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH231";
    this.playerCardSprite = "course-CH231";
    this.opponentCardSprite = "course-CH231";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH232 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH232";
    this.playerCardSprite = "course-CH232";
    this.opponentCardSprite = "course-CH232";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH233 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH233";
    this.playerCardSprite = "course-CH233";
    this.opponentCardSprite = "course-CH233";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCH331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCH331";
    this.playerCardSprite = "course-CH331";
    this.opponentCardSprite = "course-CH331";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE312 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE312";
    this.playerCardSprite = "course-CHE312";
    this.opponentCardSprite = "course-CHE312";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE331";
    this.playerCardSprite = "course-CHE331";
    this.opponentCardSprite = "course-CHE331";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE332 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE332";
    this.playerCardSprite = "course-CHE332";
    this.opponentCardSprite = "course-CHE332";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE333 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE333";
    this.playerCardSprite = "course-CHE333";
    this.opponentCardSprite = "course-CHE333";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE361";
    this.playerCardSprite = "course-CHE361";
    this.opponentCardSprite = "course-CHE361";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE411 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE411";
    this.playerCardSprite = "course-CHE411";
    this.opponentCardSprite = "course-CHE411";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE443 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE443";
    this.playerCardSprite = "course-CHE443";
    this.opponentCardSprite = "course-CHE443";
    this.majorCardParent = ["majorCHE"];
  }
}

export class CourseCHE461 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE461";
    this.playerCardSprite = "course-CHE461";
    this.opponentCardSprite = "course-CHE461";
    this.majorCardParent = ["majorCHE"];
  }
}

// ENVE Courses
export class CourseCE313 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE313";
    this.playerCardSprite = "course-CE313";
    this.opponentCardSprite = "course-CE313";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseCHE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE311";
    this.playerCardSprite = "course-CHE311";
    this.opponentCardSprite = "course-CHE311";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE322";
    this.playerCardSprite = "course-ENVE322";
    this.opponentCardSprite = "course-ENVE322";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE415";
    this.playerCardSprite = "course-ENVE415";
    this.opponentCardSprite = "course-ENVE415";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE421 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE421";
    this.playerCardSprite = "course-ENVE421";
    this.opponentCardSprite = "course-ENVE421";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE422 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE422";
    this.playerCardSprite = "course-ENVE422";
    this.opponentCardSprite = "course-ENVE422";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE425";
    this.playerCardSprite = "course-ENVE425";
    this.opponentCardSprite = "course-ENVE425";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseENVE431 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENVE431";
    this.playerCardSprite = "course-ENVE431";
    this.opponentCardSprite = "course-ENVE431";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseGEO221 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseGEO221";
    this.playerCardSprite = "course-GEO221";
    this.opponentCardSprite = "course-GEO221";
    this.majorCardParent = ["majorENVE"];
  }
}

export class CourseMB230 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseMB230";
    this.playerCardSprite = "course-MB230";
    this.opponentCardSprite = "course-MB230";
    this.majorCardParent = ["majorENVE"];
  }
}

// ESE Courses
export class CourseBA357 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBA357";
    this.playerCardSprite = "course-BA357";
    this.opponentCardSprite = "course-BA357";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseENGR390 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR390";
    this.playerCardSprite = "course-ENGR390";
    this.opponentCardSprite = "course-ENGR390";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE330 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE330";
    this.playerCardSprite = "course-ESE330";
    this.opponentCardSprite = "course-ESE330";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE355 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE355";
    this.playerCardSprite = "course-ESE355";
    this.opponentCardSprite = "course-ESE355";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE360 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE360";
    this.playerCardSprite = "course-ESE360";
    this.opponentCardSprite = "course-ESE360";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE430 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE430";
    this.playerCardSprite = "course-ESE430";
    this.opponentCardSprite = "course-ESE430";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE450 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE450";
    this.playerCardSprite = "course-ESE450";
    this.opponentCardSprite = "course-ESE450";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE470 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE470";
    this.playerCardSprite = "course-ESE470";
    this.opponentCardSprite = "course-ESE470";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE471 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE471";
    this.playerCardSprite = "course-ESE471";
    this.opponentCardSprite = "course-ESE471";
    this.majorCardParent = ["majorESE"];
  }
}

export class CourseESE497 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseESE497";
    this.playerCardSprite = "course-ESE497";
    this.opponentCardSprite = "course-ESE497";
    this.majorCardParent = ["majorESE"];
  }
}

// IE Courses
export class CourseENGR211 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR211";
    this.playerCardSprite = "course-ENGR211";
    this.opponentCardSprite = "course-ENGR211";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseENGR212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR212";
    this.playerCardSprite = "course-ENGR212";
    this.opponentCardSprite = "course-ENGR212";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE212";
    this.playerCardSprite = "course-IE212";
    this.opponentCardSprite = "course-IE212";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE355 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE355";
    this.playerCardSprite = "course-IE355";
    this.opponentCardSprite = "course-IE355";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE366 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE366";
    this.playerCardSprite = "course-IE366";
    this.opponentCardSprite = "course-IE366";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE367 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE367";
    this.playerCardSprite = "course-IE367";
    this.opponentCardSprite = "course-IE367";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE412";
    this.playerCardSprite = "course-IE412";
    this.opponentCardSprite = "course-IE412";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE415";
    this.playerCardSprite = "course-IE415";
    this.opponentCardSprite = "course-IE415";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE425";
    this.playerCardSprite = "course-IE425";
    this.opponentCardSprite = "course-IE425";
    this.majorCardParent = ["majorIE"];
  }
}

export class CourseIE426 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseIE426";
    this.playerCardSprite = "course-IE426";
    this.opponentCardSprite = "course-IE426";
    this.majorCardParent = ["majorIE"];
  }
}

// ME Courses
export class CourseENGR248 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR248";
    this.playerCardSprite = "course-ENGR248";
    this.opponentCardSprite = "course-ENGR248";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME203";
    this.playerCardSprite = "course-ME203";
    this.opponentCardSprite = "course-ME203";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME217 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME217";
    this.playerCardSprite = "course-ME217";
    this.opponentCardSprite = "course-ME217";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME310";
    this.playerCardSprite = "course-ME310";
    this.opponentCardSprite = "course-ME310";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME316 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME316";
    this.playerCardSprite = "course-ME316";
    this.opponentCardSprite = "course-ME316";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME330 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME330";
    this.playerCardSprite = "course-ME330";
    this.opponentCardSprite = "course-ME330";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME351 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME351";
    this.playerCardSprite = "course-ME351";
    this.opponentCardSprite = "course-ME351";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME373 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME373";
    this.playerCardSprite = "course-ME373";
    this.opponentCardSprite = "course-ME373";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME382 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME382";
    this.playerCardSprite = "course-ME382";
    this.opponentCardSprite = "course-ME382";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME383 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME383";
    this.playerCardSprite = "course-ME383";
    this.opponentCardSprite = "course-ME383";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME412 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME412";
    this.playerCardSprite = "course-ME412";
    this.opponentCardSprite = "course-ME412";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME414 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME414";
    this.playerCardSprite = "course-ME414";
    this.opponentCardSprite = "course-ME414";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME420 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME420";
    this.playerCardSprite = "course-ME420";
    this.opponentCardSprite = "course-ME420";
    this.majorCardParent = ["majorME"];
  }
}

export class CourseME424 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseME424";
    this.playerCardSprite = "course-ME424";
    this.opponentCardSprite = "course-ME424";
    this.majorCardParent = ["majorME"];
  }
}

// NSE Courses
export class CourseNSE217 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE217";
    this.playerCardSprite = "course-NSE217";
    this.opponentCardSprite = "course-NSE217";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE234 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE234";
    this.playerCardSprite = "course-NSE234";
    this.opponentCardSprite = "course-NSE234";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE235 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE235";
    this.playerCardSprite = "course-NSE235";
    this.opponentCardSprite = "course-NSE235";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE236 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE236";
    this.playerCardSprite = "course-NSE236";
    this.opponentCardSprite = "course-NSE236";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE311";
    this.playerCardSprite = "course-NSE311";
    this.opponentCardSprite = "course-NSE311";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE331 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE331";
    this.playerCardSprite = "course-NSE331";
    this.opponentCardSprite = "course-NSE331";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE332 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE332";
    this.playerCardSprite = "course-NSE332";
    this.opponentCardSprite = "course-NSE332";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE415";
    this.playerCardSprite = "course-NSE415";
    this.opponentCardSprite = "course-NSE415";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE435 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE435";
    this.playerCardSprite = "course-NSE435";
    this.opponentCardSprite = "course-NSE435";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE451 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE451";
    this.playerCardSprite = "course-NSE451";
    this.opponentCardSprite = "course-NSE451";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE452 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE452";
    this.playerCardSprite = "course-NSE452";
    this.opponentCardSprite = "course-NSE452";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE457 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE457";
    this.playerCardSprite = "course-NSE457";
    this.opponentCardSprite = "course-NSE457";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE467 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE467";
    this.playerCardSprite = "course-NSE467";
    this.opponentCardSprite = "course-NSE467";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE473 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE473";
    this.playerCardSprite = "course-NSE473";
    this.opponentCardSprite = "course-NSE473";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE474 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE474";
    this.playerCardSprite = "course-NSE474";
    this.opponentCardSprite = "course-NSE474";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE475";
    this.playerCardSprite = "course-NSE475";
    this.opponentCardSprite = "course-NSE475";
    this.majorCardParent = ["majorNSE"];
  }
}

export class CourseNSE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseNSE481";
    this.playerCardSprite = "course-NSE481";
    this.opponentCardSprite = "course-NSE481";
    this.majorCardParent = ["majorNSE"];
  }
}

// RHP Courses
export class CourseRHPH310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH310";
    this.playerCardSprite = "course-RHP-H310";
    this.opponentCardSprite = "course-RHP-H310";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPH425 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH425";
    this.playerCardSprite = "course-RHP-H425";
    this.opponentCardSprite = "course-RHP-H425";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPH445 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPH445";
    this.playerCardSprite = "course-RHP-H445";
    this.opponentCardSprite = "course-RHP-H445";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE234 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE234";
    this.playerCardSprite = "course-RHP-NSE234";
    this.opponentCardSprite = "course-RHP-NSE234";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE235 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE235";
    this.playerCardSprite = "course-RHP-NSE235";
    this.opponentCardSprite = "course-RHP-NSE235";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE236 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE236";
    this.playerCardSprite = "course-RHP-NSE236";
    this.opponentCardSprite = "course-RHP-NSE236";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE319 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE319";
    this.playerCardSprite = "course-RHP-NSE319";
    this.opponentCardSprite = "course-RHP-NSE319";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE415 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE415";
    this.playerCardSprite = "course-RHP-NSE415";
    this.opponentCardSprite = "course-RHP-NSE415";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE435 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE435";
    this.playerCardSprite = "course-RHP-NSE435";
    this.opponentCardSprite = "course-RHP-NSE435";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE474 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE474";
    this.playerCardSprite = "course-RHP-NSE474";
    this.opponentCardSprite = "course-RHP-NSE474";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE475";
    this.playerCardSprite = "course-RHP-NSE475";
    this.opponentCardSprite = "course-RHP-NSE475";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE481";
    this.playerCardSprite = "course-RHP-NSE481";
    this.opponentCardSprite = "course-RHP-NSE481";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE483 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE483";
    this.playerCardSprite = "course-RHP-NSE483";
    this.opponentCardSprite = "course-RHP-NSE483";
    this.majorCardParent = ["majorRHP"];
  }
}

export class CourseRHPNSE488 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseRHPNSE488";
    this.playerCardSprite = "course-RHP-NSE488";
    this.opponentCardSprite = "course-RHP-NSE488";
    this.majorCardParent = ["majorRHP"];
  }
}
