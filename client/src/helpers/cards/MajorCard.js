import Card from "./Card.js";

export class MajorCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCard";
    this.displayName = "Major Card";
    this.displayDescription = "test description";
    this.playerCardSprite = "major-card";
    this.opponentCardSprite = "major-card";
  }
}

export class MajorBE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorBE";
    this.displayName = "Bioengineering";
    this.displayDescription =
      "Make a difference to human health by studying bioengineering. In this interdisciplinary field, you'll combine biology and engineering to create new materials, devices, and processes for medical applications and biotech industries. You'll learn from leading experts in the field and have opportunities to discover applications in precision health, medical device development, cancer treatment, and more. With a solid foundation in biology, chemistry, physics, and math, underpinning advanced coursework in bioengineering principles, you'll be prepared for a career at the nexus of living systems and human design.";
    this.playerCardSprite = "major-BE";
    this.opponentCardSprite = "major-BE";
  }
}

export class MajorCBE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCBE";
    this.displayName = "Chemical Engineering";
    this.displayDescription = "";
    this.playerCardSprite = "major-CBE";
    this.opponentCardSprite = "major-CBE";
  }
}

export class MajorCIE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCIE";
    this.displayName = "Civil Engineering";
    this.displayDescription = "";
    this.playerCardSprite = "major-CIE";
    this.opponentCardSprite = "major-CIE";
  }
}

export class MajorCS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCS";
    this.displayName = "Computer Science";
    this.displayDescription = "";
    this.playerCardSprite = "major-CS";
    this.opponentCardSprite = "major-CS";
  }
}

export class MajorECS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorECS";
    this.displayName = "Electrical and Computer Engineering";
    this.displayDescription = "";
    this.playerCardSprite = "major-ECS";
    this.opponentCardSprite = "major-ECS";
  }
}
