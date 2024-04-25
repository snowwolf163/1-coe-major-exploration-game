import Card from "./Card.js";

export class MajorCard extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCard";
    this.playerCardSprite = "major-card";
    this.opponentCardSprite = "major-card";
  }
}

export class MajorBE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorBE";
    this.playerCardSprite = "major-BE";
    this.opponentCardSprite = "major-BE";
  }
}

export class MajorCBE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCBE";
    this.playerCardSprite = "major-CBE";
    this.opponentCardSprite = "major-CBE";
  }
}

export class MajorCIE extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCIE";
    this.playerCardSprite = "major-CIE";
    this.opponentCardSprite = "major-CIE";
  }
}

export class MajorCS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorCS";
    this.playerCardSprite = "major-CS";
    this.opponentCardSprite = "major-CS";
  }
}

export class MajorECS extends Card {
  constructor(scene) {
    super(scene);
    this.name = "majorECS";
    this.playerCardSprite = "major-ECS";
    this.opponentCardSprite = "major-ECS";
  }
}
