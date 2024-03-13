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
      "placeHolderCard",
      // "debtCard",
      // "loadCard",
      // "overLoadCard",
      // "reverseCard",
      // "skipCard",
      // "courseCard",
      // "majorCard",
    ]); //add more cards here eventually
    console.log(players);
    if (Object.keys(players).length < 2) return;
    io.emit("changeGameState", "Initializing");
  });

  socket.on("dealCards", function (socketId) {
    for (let i = 0; i < 5; i++) {
      if (players[socketId].inDeck.length === 0) {
        players[socketId].inDeck = shuffle([
          "placeHolderCard",
          // "debtCard",
          // "loadCard",
          // "overLoadCard",
          // "reverseCard",
          // "skipCard",
          // "courseCard",
          // "majorCard",
        ]);
      }
      players[socketId].inHand.push(players[socketId].inDeck.shift());
    }
    console.log(players);
    io.emit("dealCards", socketId, players[socketId].inHand);
    readyCheck++;
    if (readyCheck >= 2) {
      gameState = "Ready";
      io.emit("changeGameState", "Ready");
    }
  });

  socket.on("cardPlayed", function (cardName, socketId) {
    io.emit("cardPlayed", cardName, socketId);

    // Find the index of the played card in the inHand array
    const playedCardIndex = players[socketId].inHand.indexOf(cardName);

    // If the card is found in the inHand array, remove it using splice
    if (playedCardIndex !== -1) {
      players[socketId].inHand.splice(playedCardIndex, 1);
    }

    console.log("length after card played: ", players[socketId].inHand.length);
    console.log("hand after card played: ", players[socketId].inHand);
    if (players[socketId].inHand.length === 0) {
      gameState = "Win";
      io.emit("changeGameState", "Win");
    }
    io.emit("changeTurn");
  });

  socket.on("gameOver", function () {
    gameState = "Win";
    io.emit("changeGameState", "Win");
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
