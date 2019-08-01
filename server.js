// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

  

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var TablesArray = [{
  name : 'Hetal',
  phNo : '123-344-980',
  email : 'dyet@uiyo.com'
},{
  name : 'Niken',
  phNo : '111-344-980',
  email : 'dyet4uiyo.com'
},
{
  name : 'Gili',
  phNo : '444-555-666',
  email : 'dyet@uiyo.com'
}
];

var waitingList = [
  {
    name:'XYZ',
    phNo:'222-222-222',
    email:'hhh@ddd.com'
  }
]
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  // return res.send(TablesArray);
});

// Displays all characters
app.get("/reservation", function(req, res) {
res.sendFile(path.join(__dirname,"reservation.html"));
  // return res.json(characters);
});

app.get('/api/tables',function(req,res){
  res.json(TablesArray);
});

app.get('/api/waitingList',function(req,res){
  res.json(waitingList);
});
// // Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
 if(TablesArray.length<5){
   TablesArray.push(req.body);
   res.json(true);
 }else{
   waitingList.push(req.body);
   res.json(false);
 }

  
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
