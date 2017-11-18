// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tableData = [];
var reservation = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/tableData", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// Get all characters
app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



