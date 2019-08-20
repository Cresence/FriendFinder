const path = require('path');
// const router = express.Router();

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//     console.log('-----\nhtmlRoutes function is being called.\n-----');
// })

    


// module.exports = { htmlRoutes: router };
module.exports = function(app) {

    app.get("/", function(req, res) {
        console.log('htmlRoutes: Code Line 18 Being Ran');
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/result", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/result.html"));
    });

    console.log('-----\nhtmlRoutes function is being called.\n-----');
}