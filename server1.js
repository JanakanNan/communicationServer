const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sendData = {
    data: "ping",
    port: "3001"
};

const postPing = async () => {
    try {
        return await axios.post('http://127.0.0.1:8080/', sendData);
    } catch (error) {
        console.error(error);
    }
};

app.get('/', function (req, res) {
    postPing().then(function (result) {
        console.log(result.data);
    });

    res.json(sendData);
});

app.post('/', function (req, res) {
    console.log(req.body);
    postPing().then(function (result) {
        return result;
    });
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});