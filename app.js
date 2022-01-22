const express = require("express");
const bodyParser = require("body-parser");
// axios ??
const https = require("https");

const NBA = require("nba");

const nba = require('nba.js').default;
const getJSON = require("nba/src/get-json");

const { response } = require("express");

const app =  express();


// const curry = NBA.findPlayer("Kyle Lowry");
// console.log(curry);


// static files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true})); // ***


app.get("/", function(req,res){


    // nba.stats.allPlayers(function(err, resa) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
      
    //     console.log(resa);
    //   });


    const url = "https://data.nba.net/data/10s/prod/v1/2021/players.json"

    https.get(url, function(response){
        // console.log(response);

        response.on("data", function(data){
            const playerData = JSON.parse(data);
           // console.log(playerData);
        });
    });

    res.sendFile(__dirname + "/index.html");

});

// app.post("/", function(req, res){
    
// })

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});