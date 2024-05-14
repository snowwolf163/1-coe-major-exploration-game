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
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS261 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS261";
    this.playerCardSprite = "course-CS261";
    this.opponentCardSprite = "course-CS261";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS290 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS290";
    this.playerCardSprite = "course-CS290";
    this.opponentCardSprite = "course-CS290";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS344 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS344";
    this.playerCardSprite = "course-CS344";
    this.opponentCardSprite = "course-CS344";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS361";
    this.playerCardSprite = "course-CS361";
    this.opponentCardSprite = "course-CS361";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS362 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS362";
    this.playerCardSprite = "course-CS362";
    this.opponentCardSprite = "course-CS362";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS381";
    this.playerCardSprite = "course-CS381";
    this.opponentCardSprite = "course-CS381";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS391";
    this.playerCardSprite = "course-CS391";
    this.opponentCardSprite = "course-CS391";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS444";
    this.playerCardSprite = "course-CS444";
    this.opponentCardSprite = "course-CS444";
    this.majorCardParent = ["MajorCS"];
  }
}

export class CourseCS475 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS475";
    this.playerCardSprite = "course-CS475";
    this.opponentCardSprite = "course-CS475";
    this.majorCardParent = ["MajorCS"];
  }
}

// ECE courses

export class CourseCHE444 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE444";
    this.playerCardSprite = "course-CHE444";
    this.opponentCardSprite = "course-CHE444";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseCHE499 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCHE499";
    this.playerCardSprite = "course-CHE499";
    this.opponentCardSprite = "course-CHE499";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseECE271 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE271";
    this.playerCardSprite = "course-ECE271";
    this.opponentCardSprite = "course-ECE271";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseECE322 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE322";
    this.playerCardSprite = "course-ECE322";
    this.opponentCardSprite = "course-ECE322";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseECE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE341";
    this.playerCardSprite = "course-ECE341";
    this.opponentCardSprite = "course-ECE341";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseECE351 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE351";
    this.playerCardSprite = "course-ECE351";
    this.opponentCardSprite = "course-ECE351";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseECE391 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseECE391";
    this.playerCardSprite = "course-ECE391";
    this.opponentCardSprite = "course-ECE391";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseENGR201 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR201";
    this.playerCardSprite = "course-ENGR201";
    this.opponentCardSprite = "course-ENGR201";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseENGR202 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR202";
    this.playerCardSprite = "course-ENGR202";
    this.opponentCardSprite = "course-ENGR202";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CourseENGR203 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR203";
    this.playerCardSprite = "course-ENGR203";
    this.opponentCardSprite = "course-ENGR203";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CoursePH211 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH211";
    this.playerCardSprite = "course-PH211";
    this.opponentCardSprite = "course-PH211";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CoursePH212 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH212";
    this.playerCardSprite = "course-PH212";
    this.opponentCardSprite = "course-PH212";
    this.majorCardParent = ["MajorECE"];
  }
}

export class CoursePH481 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "coursePH481";
    this.playerCardSprite = "course-PH481";
    this.opponentCardSprite = "course-PH481";
    this.majorCardParent = ["MajorECE"];
  }
}

// "multi" courses

export class CourseCS161 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS161";
    this.playerCardSprite = "course-CS161";
    this.opponentCardSprite = "course-CS161";
    this.majorCardParent = ["MajorECE", "MajorCS"];
  }
}

export class CourseCS162 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCS162";
    this.playerCardSprite = "course-CS162";
    this.opponentCardSprite = "course-CS162";
    this.majorCardParent = ["MajorECE", "MajorCS"];
  }
}

export class CourseENGR100 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR100";
    this.playerCardSprite = "course-ENGR100";
    this.opponentCardSprite = "course-ENGR100";
    this.majorCardParent = ["MajorECE", "MajorCS"];
  }
}

export class CourseENGR102 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR102";
    this.playerCardSprite = "course-ENGR102";
    this.opponentCardSprite = "course-ENGR102";
    this.majorCardParent = ["MajorECE", "MajorCS"];
  }
}

export class CourseENGR103 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseENGR103";
    this.playerCardSprite = "course-ENGR103";
    this.opponentCardSprite = "course-ENGR103";
    this.majorCardParent = ["MajorECE", "MajorCS"];
  }
}

// ARE Courses

export class CourseARE310 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE310";
    this.playerCardSprite = "course-ARE310";
    this.opponentCardSprite = "course-ARE310";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE311 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE311";
    this.playerCardSprite = "course-ARE311";
    this.opponentCardSprite = "course-ARE311";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE341 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE310";
    this.playerCardSprite = "course-ARE341";
    this.opponentCardSprite = "course-ARE341";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE361 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE361";
    this.playerCardSprite = "course-ARE361";
    this.opponentCardSprite = "course-ARE361";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE418 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE418";
    this.playerCardSprite = "course-ARE418";
    this.opponentCardSprite = "course-ARE418";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE419 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE419";
    this.playerCardSprite = "course-ARE419";
    this.opponentCardSprite = "course-ARE419";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE451 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE451";
    this.playerCardSprite = "course-ARE451";
    this.opponentCardSprite = "course-ARE451";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE461 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE461";
    this.playerCardSprite = "course-ARE461";
    this.opponentCardSprite = "course-ARE461";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE462 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE462";
    this.playerCardSprite = "course-ARE462";
    this.opponentCardSprite = "course-ARE462";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseARE462 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseARE462";
    this.playerCardSprite = "course-ARE462";
    this.opponentCardSprite = "course-ARE462";
    this.majorCardParent = ["MajorARE"];
  }
}

export class CourseCE381 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseCE381";
    this.playerCardSprite = "course-CE381";
    this.opponentCardSprite = "course-CE381";
    this.majorCardParent = ["MajorARE"];
  }
}

// BEE Courses

export class CourseBEE221 extends Card {
  constructor(scene) {
    super(scene);
    this.name = "courseBEE221";
    this.playerCardSprite = "course-BEE221";
    this.opponentCardSprite = "course-BEE221";
    this.majorCardParent = ["MajorBEE"];
  }
}
