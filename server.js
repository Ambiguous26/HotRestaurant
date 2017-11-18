// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tableData = [];
var reservation = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  console.log("/home...");
  res.sendFile(path.join(__dirname, "home.html"));

});

app.get("/tables", function(req, res) {
	console.log('Inside tables...')
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Get all characters
app.get("/reserve", function(req, res) {
	console.log('Inside /reservations...')
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// 
app.get("/api/tables", function(req, res) {
 
  for (i=0;i<tableData.length;i++) {
   		console.log(tableData[i]);
  }
   return res.json(tableData);
});

// Create New Characters - takes in JSON input
app.post("/api/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreserve = req.body;
  newreserve.routeName = newreserve.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreserve);

  tableData.push(newreserve);

  res.json(newreserve);

  // console.log('In POST api/reserve....')
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



