//  We are going to build out a simple server and 
// respond to / with index.html

const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

function homeSendFile(req, res){
    const homePath = path.join(__dirname, 'index.html');
    res.status(200).sendFile(homePath);
};

function listenCB () {
    console.log("now we're running server on port: " + port);
};

app.get('/' , homeSendFile);

app.listen(port, listenCB);