// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const data = require('./app/data/friends.js');

// let friends = [
//     {
//         friendName: "Gatts",
//         trait: "Loyal",
//         photo: "https://vignette.wikia.nocookie.net/berserk/images/4/40/Manga_V38_Guts.png/revision/latest/scale-to-width-down/350?cb=20170919104357"
//     },
//     {
//         friendName: "Griffith",
//         trait: "Leader",
//         photo: "https://vignette.wikia.nocookie.net/berserk/images/b/b0/BTCG_Griffith_Holding_Sabre.png/revision/latest?cb=20170930052614"
//     },
//     {
//         friendName: "Casca",
//         trait: "Loving",
//         photo: "https://vignette.wikia.nocookie.net/berserk/images/d/d0/BTCG_Casca_and_Puck.png/revision/latest?cb=20170923104942"
//     }
// ]

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Server listening on port: ${PORT}\n Website: http://localhost:${PORT}`);
  });
  
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// app.use(apiRoutes);
// app.use(htmlRoutes);

// app.get("/api/friends", (req, res) => res.json(friends));


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/survey.html"))
// });

// app.get("/result", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/result.html"));
// });

// app.post("/api/friends", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     let surveyInquiry = req.body;
  
//     // Using a RegEx Pattern to remove spaces from surveyInquiry
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     surveyInquiry.name = surveyInquiry.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(surveyInquiry);
  
//     friends.push(surveyInquiry);
  
//     res.json(surveyInquiry);

// });


  module.exports = {
      express,
      app
  };