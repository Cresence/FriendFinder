const express = require('express');
const app = express();

function htmlRoutes(){
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/home.html")));
    
    app.get("/survey", (req, res) => res.sendFile(path.join(__dirname, "../public/survey.html")));

    console.log('-----\nhtmlRoutes function is being called\n-----');
};

// htmlRoutes();


module.exports = htmlRoutes;