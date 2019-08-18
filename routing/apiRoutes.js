const express = require('express');
const app = express();
const data = require('../app/data/friends.js');


const apiRoutes = () => {
    app.get("/api/friends", (req, res) => res.json(data));

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let surveyInquiry = req.body;
      
        // Using a RegEx Pattern to remove spaces from surveyInquiry
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        surveyInquiry.name = surveyInquiry.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(surveyInquiry);
      
        data.push(surveyInquiry);
      
        res.json(surveyInquiry);
      });

    console.log('-----\napiRoutes function is being called.\n-----');
}

console.log(data);

module.exports = apiRoutes;