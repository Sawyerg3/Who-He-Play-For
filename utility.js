const axios = require("axios");

// get nba teams to choose a random player
function getTeams() {
  const teamOptions = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/teams",
    params: { league: "Utah" },
    headers: {
      "X-RapidAPI-Key": "866fa8d819msh01fd5e50961596cp1f595ejsn63ca2fd50ea9",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  const rand = axios
    .request(teamOptions)
    .then(function (response) {
      const teams = response.data.response;
      const randomTeam = teams[Math.floor(Math.random() * teams.length)];
      return randomTeam.id;
    })
    .catch(function (error) {
      console.error(error);
    });

  return rand;
}

// get random player from random team
async function getPlayer() {
  const teamNumber = await getTeams();

  const playerOptions = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players",
    params: { season: "2022", team: teamNumber },
    headers: {
      "X-RapidAPI-Key": "866fa8d819msh01fd5e50961596cp1f595ejsn63ca2fd50ea9",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  const randomPlayer = axios
    .request(playerOptions)
    .then(function (response) {
      console.log(response.data.results);
      players = response.data.response;
      return players[Math.floor(Math.random() * response.data.results)];
      // console.log(" random Player: " + players[Math.floor(Math.random() * response.data.results) ].firstname)
    })
    .catch(function (error) {
      console.error(error);
    });

  return randomPlayer;
}

function getTeam() {}

module.exports = { getPlayer };
