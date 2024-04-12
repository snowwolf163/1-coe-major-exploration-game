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
      "reverseCard",
      "skipCard",
      "courseCard",
      "majorCard",
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
          "reverseCard",
          "skipCard",
          "courseCard",
          "majorCard",
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
    io.emit("cardPlayed", cardName, socketId);
    const playedCardIndex = players[socketId].inHand.indexOf(cardName);
    if (playedCardIndex !== -1) {
      players[socketId].inHand.splice(playedCardIndex, 1);
    }
    if (players[socketId].inHand.length === 0) {
      gameState = "Win";
      io.emit("changeGameState", { state: "Win", winner: socketId });
    }
    if (cardName == "debtCard") {
      //cur player gets to play again
      return;
    }
    io.emit("changeTurn");
  });

  socket.on("turnSkipped", function () {
    io.emit("changeTurn");
  });

  socket.on("drawCard", function (socketID) {
    // console.log("drawCard called", socketID);
    //TODO: refill deck infinitely ??, bug here for no cards left in deck
    if (players[socketID].inDeck.length === 0) {
      console.log("no cards left in players deck");
      return;
    }
    const cardName = players[socketID].inDeck.shift(); // Get card from deck into hand on the backend
    players[socketID].inHand.push(cardName);
    //TODO: add new card into hands visually
    // console.log(socketID, " server.js");
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
