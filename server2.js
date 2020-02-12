const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', function (req, res, next) {
    axios.get("http://localhost:3000").then(function (result) {
        console.log(result.data);
    });
    res.json("pong");
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
});