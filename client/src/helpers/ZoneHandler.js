export default class ZoneHandler {
  constructor(scene) {
    this.renderZone = (x, y) => {
      let dropZone = scene.add
        .zone(x, y, 200, 250)
        .setRectangleDropZone(200, 250);
      dropZone.setData({
        cards: 0,
      });
      return dropZone;
    };
    this.renderOutline = (dropZone) => {
      let dropZoneOutline = scene.add.graphics();
      dropZoneOutline.lineStyle(2, 0x000000); //black
      dropZoneOutline.strokeRect(
        dropZone.x - dropZone.input.hitArea.width / 2,
        dropZone.y - dropZone.input.hitArea.height / 2,
        dropZone.input.hitArea.width,
        dropZone.input.hitArea.height
      );
    };
  }
}
