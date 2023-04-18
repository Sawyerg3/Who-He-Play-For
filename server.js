const express = require("express");
const app = express();
const { getPlayer } = require("./utility.js");

var player;
var team;

// static files
app.use(express.static("public"));
app.use(express.static("js"));

app.get("/player", async function (req, res) {
  console.log("getting player");
  const player = await getPlayer();
  console.log(player);
  res.status(200).json(player);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
