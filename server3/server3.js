const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server_port = {
    server1: "3001",
    server2: "3000"
};

const postMessage = async (port, body) => {
    try {
        return await axios.post('http://127.0.0.1:' + port, body);
    } catch (error) {
        console.error(error);
    }
};

app.post('/', function (req, res) {
    let port = (server_port.server1 === req.body.port) ? server_port.server2 : server_port.server1;
    console.log(req.body);
    postMessage(port, req.body).then(function (result) {
        return result;
    });
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});