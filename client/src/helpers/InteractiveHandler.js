export default class InteractiveHandler {

  constructor(scene) {
      scene.cardPreview = null;

      //game logic function
       function gameRules (previousCard, currentCard) {
           console.log("This is the previous card in gameRules", previousCard)
           if (previousCard == null) {
               return true;
           }

          //Assuming event cards are typeless, playing them or a major card has no effect. Same with playing any card after an event card. 
          if ((currentCard.values.name[0] !== 'c') || (previousCard.values.name[0] !== 'c' && previousCard.values.name[0] !== 'm')) {
            console.log((previousCard.values.name[0] !== 'c' && previousCard.values.name[0] !== 'm'))
              return true;
          } 

          if (previousCard.values.name[0] === 'm' && currentCard.values.name[0] === 'c') {
              for (var i=0; i < currentCard.list.majorCardParent.length; i++){
                if (currentCard.list.majorCardParent[i] === previousCard.values.name) {
                  return true;
                }
              }
                  return false;
          }
          else if (previousCard.values.name[0] === 'c' && currentCard.values.name[0] === 'c') {
              //Checks to see if the first character of the course number is equal tier or if they have the same parent
              if ((previousCard.values.name[previousCard.values.name.length - 3] === currentCard.values.name[currentCard.values.name.length - 3])) {
                  return true;
              }
              for (var i = 0; i < previousCard.list.majorCardParent.length; i++) {
                for (var j = 0; j < currentCard.list.majorCardParent.length; j++)
                  if (previousCard.list.majorCardParent[i] === currentCard.list.majorCardParent[j]) {
                    return true;
                  }
              }
          }

           return false;
       }



    scene.dealCards.on("pointerdown", () => {
      scene.socket.emit("dealCards", scene.socket.id);
      scene.dealCards.disableInteractive();
      scene.dealCards.setVisible(false);
      scene.plusOne.setInteractive(); //activate plus one button here
      scene.plusOne.setColor("#ffffff");
    });
    scene.dealCards.on("pointerover", () => {
      scene.dealCards.setColor("#000000");
    });
    scene.dealCards.on("pointerout", () => {
      scene.dealCards.setColor("#ffffff");
    });

    scene.plusOne.on("pointerdown", () => {
      //TODO: logic to check if this should actually happen based on cards in your hand
      if (scene.GameHandler.isMyTurn == true) {
        scene.socket.emit("drawCard", scene.socket.id);
        scene.socket.emit("turnSkipped");
      }
    });
    scene.plusOne.on("pointerover", () => {
      scene.plusOne.setColor("#000000");
    });
    scene.plusOne.on("pointerout", () => {
      scene.plusOne.setColor("#ffffff");
    });

    // util function to take a string and make it "wrapped"
    function wrapText(text, maxCharsPerLine) {
      //text = String(text)
      const words = text.split(" ");
      let line = "";
      const wrappedText = [];
      words.forEach((word) => {
        if (line.length + word.length <= maxCharsPerLine) {
          line += word + " ";
        } else {
          wrappedText.push(line);
          line = word + " ";
        }
      });
      wrappedText.push(line);
      return wrappedText.join("\n");
    }

    let cardDescriptionTitle;
    let cardDescriptionText;

    // on click show more info in shelf
    scene.input.on("pointerdown", (event, gameObjects) => {
      // clear current text inside shelf
      if (cardDescriptionTitle) cardDescriptionTitle.destroy();
      if (cardDescriptionText) cardDescriptionText.destroy();
      // set new text if a card was clicked
      if (gameObjects && gameObjects.length > 0) {
        const clickedObject = gameObjects[0];
        if (
          clickedObject.type === "Image" &&
          clickedObject.data.list.name !== "cardBack"
        ) {
          // console.log("CLICKED THIS CARD: ", clickedObject.data);
          const wrappedTitleText = wrapText(
            clickedObject.data.list.displayName,
            15
          );
          cardDescriptionTitle = scene.add.text(
            1055, // X position, align with the rectangle
            350, // Y position, align with the rectangle
            wrappedTitleText,
            {
              fontSize: "24px",
              fill: "#000000", // Text color
            }
          );
          cardDescriptionTitle.setOrigin(0.5);
          const wrappedDescriptionText = wrapText(
            clickedObject.data.list.displayDescription,
            25
          );
          cardDescriptionText = scene.add.text(
            1055, // X position, align with the rectangle
            500, // Y position, align with the rectangle
            wrappedDescriptionText,
            {
              fontSize: "16px",
              fill: "#000000", // Text color
            }
          );
          cardDescriptionText.setOrigin(0.5);
        }
      }
    });

    scene.input.on("pointerover", (event, gameObjects) => {
      let pointer = scene.input.activePointer;
      if (
        gameObjects[0].type === "Image" &&
        gameObjects[0].data.list.name !== "cardBack"
      ) {
        scene.cardPreview = scene.add
          .image(
            pointer.worldX,
            pointer.worldY,
            gameObjects[0].data.values.sprite
          )
          .setScale(0.5, 0.5);
      }
    });

    scene.input.on("pointerout", (event, gameObjects) => {
      if (
        gameObjects[0].type === "Image" &&
        gameObjects[0].data.list.name !== "cardBack"
      ) {
        scene.cardPreview.setVisible(false);
      }
    });

    scene.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    scene.input.on("dragstart", (pointer, gameObject) => {
      gameObject.setTint(0x999999);
      scene.children.bringToTop(gameObject);
      scene.cardPreview.setVisible(false);
    });

    scene.input.on("dragend", (pointer, gameObject, dropped) => {
      gameObject.setTint();
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });

    scene.input.on("drop", (pointer, gameObject, dropZone) => {
        if (
            scene.GameHandler.isMyTurn &&
            scene.GameHandler.gameState === "Ready" &&
            gameRules(scene.GameHandler.pileTop, gameObject.data) //added
      ) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
            scene.input.setDraggable(gameObject, false);
            
        scene.socket.emit(
          "cardPlayed",
          gameObject.data.values.name,
            scene.socket.id
            );
        scene.socket.emit(
          "updateTop",
          gameObject.data
        );

      } else {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });
  }
}
