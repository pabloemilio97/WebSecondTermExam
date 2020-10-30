// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.send("You are on the homepage")
});

app.post("/post", function (req, res) {
    let user = req.body.user;
    console.log(req)
    res.send(`Welcome ${user}`)
});

app.delete("/delete", function (req, res) {
    let taskId = req.body.taskId
    res.json({delete: true})
});

// Displays all characters
app.put("/put/:id", function (req, res) {
  id = req.params.id
  res.send(`Task ${id} has been updated`)
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
