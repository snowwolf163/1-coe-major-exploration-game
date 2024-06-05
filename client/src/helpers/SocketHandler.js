import io from "socket.io-client";

export default class SocketHandler {
  constructor(scene) {
    //"http://localhost:3000" for running on localhost
    scene.socket = io("http://18.189.3.19:3000/");

    scene.socket.on("connect", () => {
      console.log("Connected!");
      scene.socket.emit("dealDeck", scene.socket.id);
    });

    scene.socket.on("firstTurn", () => {
      scene.GameHandler.changeTurn();
    });

    scene.socket.on("changeGameState", ({ state, winner }) => {
      scene.GameHandler.changeGameState(state);
      if (state === "Initializing") {
        //remove loading screen here
        scene.UIHandler.removeLoadingScreen();
        scene.DeckHandler.dealCard(750, 500, "cardBack", "opponentCard");
        scene.DeckHandler.dealCard(750, 500, "cardBack", "playerCard");
        scene.dealCards.setInteractive(); //deal cards button activated here
        scene.dealCards.setColor("#ffffff");
      } else if (state === "Win") {
        console.log("winner: ", winner, " scene.socket.id: ", scene.socket.id);
        scene.UIHandler.buildWinScreen(winner === scene.socket.id);
      }
    });

    scene.socket.on("changeTurn", () => {
      scene.GameHandler.changeTurn();
    });

    scene.socket.on("dealCards", (socketId, cards) => {
      // Determine the length of the player hand
      const playerHandLength = 5;
      const cardWidth = 155; // Assuming each card is 155 pixels wide
      // Calculate the total width occupied by all cards in the hand
      const totalWidth = playerHandLength * cardWidth;
      // Calculate the starting x-coordinate for the first card
      const startX = (scene.sys.canvas.width - totalWidth) / 2;

      if (socketId === scene.socket.id) {
        for (let i in cards) {
          let card = scene.GameHandler.playerHand.push(
            scene.DeckHandler.dealCard(
              startX + i * cardWidth,
              860,
              cards[i],
              "playerCard"
            )
          );
        }
      } else {
        for (let i in cards) {
          let card = scene.GameHandler.opponentHand.push(
            scene.DeckHandler.dealCard(
              startX + i * cardWidth,
              135,
              "cardBack",
              "opponentCard"
            )
          );
        }
      }
    });
    scene.socket.on("actionDraw", (cardCount, socketId) => {
      if (socketId !== scene.socket.id) {
        console.log("socket handler");
        scene.GameHandler.updateDrawCount(cardCount);
      }
    });
    // card played into center stack
    scene.socket.on("cardPlayed", (cardName, socketId) => {
      if (socketId !== scene.socket.id) {
        scene.GameHandler.opponentHand.shift().destroy();
        scene.DeckHandler.dealCard(
          scene.dropZone.x,
          scene.dropZone.y,
          cardName,
          "opponentCard"
        );
      } else {
        // TODO: update players hand here, removing cardname
        // search through playerhand array to delete played card from it
        for (let i = 0; i < scene.GameHandler.playerHand.length; i++) {
          if (scene.GameHandler.playerHand[i].data.list.name == cardName) {
            // destroy card here
            scene.GameHandler.playerHand.splice(i, 1);
            break;
          }
        }
        // console.log(
        //   "player hand after card played",
        //   scene.GameHandler.playerHand,
        //   "cardName",
        //   cardName
        // );
      }
    });

    scene.socket.on("updateTop", (top) => {
      scene.GameHandler.updateTop(top);
    })
    //TODO:
    //card given to opponent
    // scene.socket.on("opponentDrawCard", (socketId) => {});

    // card added to player hand
    scene.socket.on("drawCard", (cardName, socketId) => {
      const cardWidth = 155; // Assuming each card is 155 pixels wide
      if (socketId == scene.socket.id) {
        //index now stored at "card".data

        // Determine the length of the player hand
        const playerHandLength = scene.GameHandler.playerHand.length;
        // Calculate the total width occupied by all cards in the hand
        const totalWidth = playerHandLength * cardWidth;
        // Calculate the starting x-coordinate for the first card
        const startX = (scene.sys.canvas.width - totalWidth) / 2;
        // Reposition existing cards
        scene.GameHandler.playerHand.forEach((card, index) => {
          card.x = startX + index * cardWidth;
        });

        // Add the new card to the end of the player's hand
        const newX = startX + playerHandLength * cardWidth;
        scene.GameHandler.playerHand.push(
          scene.DeckHandler.dealCard(newX, 860, cardName, "playerCard")
        );
      } else {
        // Determine length of opponent hand
        const opponentHandLength = scene.GameHandler.opponentHand.length;
        // Calculate the total width occupied by all cards in the hand
        const totalWidth = opponentHandLength * cardWidth;
        // Calculate the starting x-coordinate for the first card
        const startX = (scene.sys.canvas.width - totalWidth) / 2;
        // Reposition existing cards
        scene.GameHandler.opponentHand.forEach((card, index) => {
          card.x = startX + index * cardWidth;
        });

        // Add the new card to the end of the opponent's hand
        const newX = startX + opponentHandLength * cardWidth;
        scene.GameHandler.opponentHand.push(
          scene.DeckHandler.dealCard(newX, 135, "cardBack", "opponentCard")
        );
      }
    });
  }
}
