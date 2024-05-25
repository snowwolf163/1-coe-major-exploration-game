const server = require("express")();
const http = require("http").createServer(server);
const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");
const shuffle = require("shuffle-array");
let gameState = "Initializing";
let players = {};
let readyCheck = 0;

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

server.use(cors());
server.use(serveStatic(__dirname + "/client/dist"));

io.on("connection", function (socket) {
  console.log("A user connected: " + socket.id);

  players[socket.id] = {
    inDeck: [],
    inHand: [],
    isPlayerA: false,
  };

  if (Object.keys(players).length < 2) {
    players[socket.id].isPlayerA = true;
    io.emit("firstTurn");
  }

  socket.on("dealDeck", function (socketId) {
    players[socketId].inDeck = shuffle([
      // "placeHolderCard",
      "debtCard",
      "loadCard",
      "overLoadCard",
      // "skipCard",
      // "courseCard", //placeholder
      "courseCS46X",
      "courseCS261",
      "courseCS290",
      "courseCS344",
      "courseCS361",
      "courseCS362",
      "courseCS381",
      "courseCS391",
      "courseCS444",
      "courseCS475",
      "courseCHE444",
      "courseCHE499",
      "courseECE271",
      "courseECE322",
      "courseECE341",
      "courseECE351",
      "courseECE391",
      "courseENGR201",
      "courseENGR202",
      // "courseENGR203",
      // "coursePH211",
      // "coursePH212",
      // "coursePH481",
      // "courseCS161",
      // "courseCS162",
      // "courseENGR100",
      // "courseENGR102",
      // "courseENGR103",

      // "majorCard", //placeholder
      //"majorBE",
      //"majorCBE",
      //"majorCIE",
      "majorCS",
      //"majorECS",
    ]); //add more cards here eventually
    console.log(players);
    if (Object.keys(players).length < 2) return;
    io.emit("changeGameState", { state: "Initializing", winner: null });
  });

  socket.on("dealCards", function (socketId) {
    for (let i = 0; i < 5; i++) {
      if (players[socketId].inDeck.length === 0) {
        players[socketId].inDeck = shuffle([
          // "placeHolderCard",
          "debtCard",
          "loadCard",
          "overLoadCard",
          // "skipCard",
          // "courseCard", //placeholder
          "courseCS46X",
          "courseCS261",
          "courseCS290",
          "courseCS344",
          "courseCS361",
          "courseCS362",
          "courseCS381",
          "courseCS391",
          "courseCS444",
          "courseCS475",
          "courseCHE444",
          "courseCHE499",
          "courseECE271",
          "courseECE322",
          "courseECE341",
          "courseECE351",
          "courseECE391",
          "courseENGR201",
          "courseENGR202",
          // "courseENGR203",
          // "coursePH211",
          // "coursePH212",
          // "coursePH481",
          // "courseCS161",
          // "courseCS162",
          // "courseENGR100",
          // "courseENGR102",
          // "courseENGR103",

          // "majorCard", //placeholder
          //"majorBE",
          //"majorCBE",
          //"majorCIE",
          "majorCS",
          //"majorECS",
        ]);
      }
      players[socketId].inHand.push(players[socketId].inDeck.shift());
    }
    console.log(players);
    io.emit("dealCards", socketId, players[socketId].inHand);
    readyCheck++;
    if (readyCheck >= 2) {
      gameState = "Ready";
      io.emit("changeGameState", { state: "Ready", winner: null });
    }
  });

  socket.on("cardPlayed", function (cardName, socketId) {
    console.log("card played: ", cardName, " - server.js");
    // console.log("cards in hand before function: ", players);
    io.emit("cardPlayed", cardName, socketId);
    const playedCardIndex = players[socketId].inHand.indexOf(cardName);
    if (playedCardIndex !== -1) {
      players[socketId].inHand.splice(playedCardIndex, 1);
    }
    if (players[socketId].inHand.length === 0) {
      gameState = "Win";
      io.emit("changeGameState", { state: "Win", winner: socketId });
    }
    //logic for action cards
    if (cardName == "debtCard") {
      //current player gets to play again, so return
      console.log(
        "debt card played, user that is calling this fxn is: " +
          socketId
      );
      return;
    }
    if (cardName == "loadCard" ) {
      console.log(
        "load card played, user that is calling this fxn is: " +
          socketId
      );
      io.emit("actionDraw", 2, socketId);
      return;
    }
    if (cardName == "overLoadCard") {
      console.log(
        "overload card played, user that is calling this fxn is: " +
          socketId
      );
      io.emit("actionDraw", 4, socketId);
      return;
    } 
    // console.log("cards in hand after function: ", players);
    io.emit("changeTurn");
  });

  socket.on("updateTop", function (top) {
    io.emit("updateTop", top);
  });

  socket.on("turnSkipped", function () {
    io.emit("changeTurn");
  });

  socket.on("drawCard", function (socketID) {
    //TODO: refill deck infinitely ??, bug here for no cards left in deck
    if (players[socketID].inDeck.length === 0) {
      console.log("no cards left in players deck");
      return;
    }
    const cardName = players[socketID].inDeck.shift(); // Get card from deck into hand on the backend
    players[socketID].inHand.push(cardName);
    io.emit("drawCard", cardName, socketID);
  });

  socket.on("disconnect", function () {
    console.log("A user disconnected: " + socket.id);
    delete players[socket.id];
  });
});

const port = process.env.PORT || 3000;

http.listen(port, function () {
  console.log("Server started!");
});
