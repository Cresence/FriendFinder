const friends = require('../app/data/friends.js');



console.log(friends + ' apiRoutes.js-line:5');

module.exports = function(app) {
  app.get("/api/friends", (req, res) => res.json(friends));

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let surveyInquiry = req.body;
      
        // Using a RegEx Pattern to remove spaces from surveyInquiry
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        surveyInquiry.name = surveyInquiry.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(surveyInquiry);
      
        friends.push(surveyInquiry);
      
        res.json(surveyInquiry);
      });

    console.log('-----\napiRoutes function is being called.\n-----');
}