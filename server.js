const server = require("express")();
const http = require("http").createServer(server);
const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");
const shuffle = require("shuffle-array");
const ARE = ["majorARE", "courseARE310", "courseARE311", "courseARE341", "courseARE361", "courseARE418", "courseARE419", "courseARE451", "courseARE461", "courseARE462", "courseCE381", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const BEE = ["majorBEE", "courseBEE221", "courseBEE222", "courseBEE270", "courseBEE312", "courseBEE322", "courseBEE361", "courseBEE362", "courseBEE415", "courseBEE468", "courseBEE481", "courseBEE482", "courseBEE483", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const BIOE = ["majorBIOE", "courseBI231", "courseBIOE240", "courseBIOE311", "courseBIOE331", "courseBIOE340", "courseBIOE350", "courseBIOE420", "courseBIOE457", "courseBIOE465", "courseCBEE212", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const CE = ["majorCE", "courseCCE201", "courseCCE207", "courseCE202", "courseCE311", "courseCE313", "courseCE361", "courseCE371", "courseCE372", "courseCE412", "courseCE481", "courseCE491", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const CEM = ["majorCEM", "courseCCEM201", "courseCCE203", "courseCCE321", "courseCE427", "courseCEM341", "courseCEM381", "courseCEM441", "courseCEM471", "courseCEM472", "courseECON201", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const CHE = ["majorCHE", "courseCH231", "courseCH232", "courseCH233", "courseCH331", "courseCHE312", "courseCHE331", "courseCHE332", "courseCHE333", "courseCHE361", "courseCHE411", "courseCHE443", "courseCHE461", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const CS = ["majorCS", "courseCS46X", "courseCS161", "courseCS162", "courseENGR100", "courseENGR103", "courseCS261", "courseCS290", "courseCS344", "courseCS361", "courseCS362", "courseCS381", "courseCS391", "courseCS444", "courseCS475", "courseCH121", "courseCOMM111", "courseWR121"]
const ECE = ["majorECE", "courseCHE444", "courseCHE499", "courseECE271", "courseECE322", "courseECE341", "courseECE351", "courseECE391", "courseENGR201", "courseENGR202", "courseENGR203", "coursePH211", "coursePH212", "coursePH481", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const ENVE = ["majorENVE", "courseENVECE313", "courseCHE311", "courseENVE322", "courseENVE415", "courseENVE421", "courseENVE422", "courseENVE425", "courseENVE431", "courseGEO221", "courseMB230", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const ESE = ["majorESE", "courseBA357", "courseENGR390", "courseESE330", "courseESE355", "courseESE360", "courseESE430", "courseESE450", "courseESE470", "courseESE471", "courseESE497", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const IE = ["majorIE", "courseENGR211", "courseENGR212", "courseIE212", "courseIE355", "courseIE366", "courseIE367", "courseIE412", "courseIE415", "courseIE425", "courseIE426", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const ME = ["majorME", "courseENGR248", "courseME203", "courseME217", "courseME310", "courseME316", "courseME330", "courseME351", "courseME373", "courseME382", "courseME383", "courseME412", "courseME414", "courseME420", "courseME424", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const NSE = ["majorNSE", "courseNSE217", "courseNSE234", "courseNSE235", "courseNSE236", "courseNSE311", "courseNSE331", "courseNSE332", "courseNSE415", "courseNSE435", "courseNSE451", "courseNSE452", "courseNSE457", "courseNSE467", "courseNSE473", "courseNSE474", "courseNSE475", "courseNSE481", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
const RHP = ["majorRHP", "courseRHPH310", "courseRHPH425", "courseRHPH445", "courseRHPNSE234", "courseRHPNSE235", "courseRHPNSE236", "courseRHPNSE319", "courseRHPNSE415", "courseRHPNSE435", "courseRHPNSE474", "courseRHPNSE475", "courseRHPNSE481", "courseRHPNSE483", "courseRHPNSE488", "courseCH121", "courseCOMM111", "courseCS161", "courseCS162", "courseENGR100", "courseENGR102", "courseENGR103", "courseWR121"]
let gameState = "Initializing";
let players = {};
let gamemajors = []
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
    //add action cards
    for (let i = 0; i < 4; i++) {
      gamemajors.push(["debtCard", "loadCard", "overLoadCard"])
    }
    //determine majors on game start as first person joins
    majors = shuffle([ARE, BEE, BIOE, CE, CEM, CHE, CS, ECE, ENVE, ESE, IE, ME, NSE, RHP])
    gamemajors.push(majors.shift(), majors.shift(), majors.shift(), majors.shift())
    io.emit("firstTurn");
  }

  socket.on("dealDeck", function (socketId) {
    players[socketId].inDeck = shuffle(gamemajors.flat()); //add more cards here eventually
    console.log(players);
    if (Object.keys(players).length < 2) return;
    io.emit("changeGameState", { state: "Initializing", winner: null });
  });

  socket.on("dealCards", function (socketId) {
    for (let i = 0; i < 5; i++) {
      if (players[socketId].inDeck.length === 0) {
        players[socketId].inDeck = shuffle(gamemajors.flat());
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
