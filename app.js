const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app =  express();

// static files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true})); // ***

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");

})

// app.post("/", function(req, res){
    
// })

app.listen(3000, function() {
    console.log("Server started on port 3000.");
})