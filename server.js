// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const apiRoutes = require("./routing/apiRoutes.js");
const htmlRoutes = require("./routing/htmlRoutes.js");
const data = require('./app/data/friends.js');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Server listening on ${PORT}\n Website: http://localhost:${PORT}`);
  });
  
apiRoutes();
htmlRoutes();


  module.exports = {
      express,
      app
  };