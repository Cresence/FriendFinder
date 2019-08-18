const express = require('express');
const app = express();
const data = require('../app/data/friends.js');

const apiRoutes = function () {
    app.get("/api/friends/", (req, res) => res.json(data));

    console.log('-----\napiRoutes function is being called\n-----');

}

console.log(data);

module.exports = apiRoutes;