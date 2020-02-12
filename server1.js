const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', function (req, res, next) {
    axios.get("http://localhost:3001").then(function (result) {
        console.log(result.data);
    });
    res.json("ping");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});