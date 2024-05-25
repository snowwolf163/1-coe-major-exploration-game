export default class Card {
  constructor(scene) {
    this.render = (x, y, type) => {
      let sprite;
      if (type === "playerCard") {
        sprite = this.playerCardSprite;
      } else {
        sprite = this.opponentCardSprite;
      }
      let card = scene.add
        .image(x, y, sprite)
        .setScale(0.2, 0.2)
        .setInteractive()
        .setData({
          name: this.name,
          type: type,
          sprite: sprite,
          displayName: this.displayName,
          displayDescription: this.displayDescription,
          majorCardParent: this.majorCardParent
        });
      if (type === "playerCard") {
        scene.input.setDraggable(card);
      }
      return card;
    };
  }
}
