const express = require('express');
const path = require('path');
const app = express();
// const router = express.Router();

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//     console.log('-----\nhtmlRoutes function is being called.\n-----');
// })

const htmlRoutes = () => {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/result", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/result.html"));
    })

    console.log('-----\nhtmlRoutes function is being called.\n-----');
};

// module.exports = { htmlRoutes: router };
module.exports = htmlRoutes;