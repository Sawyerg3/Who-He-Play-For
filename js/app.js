const newGuessBtn = $("#guess");
const nameTarget = $("#player-name");

const URL = "http://127.0.0.1:3000/player";

async function getPlayer() {
  console.log("getting player");
  const res = await fetch(URL, { method: "GET" });
  const player = await res.json();
  console.log(player);
  nameTarget.text(player.firstname + " " + player.lastname);
  return res;
}

newGuessBtn.click(getPlayer);

// var player = getPlayer();

// nameTarget.css("color", "green");
