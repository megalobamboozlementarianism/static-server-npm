
const express = require('express');
const port = 3000;
const path = require('path');

const app = express();

function listenCB () {
    console.log("now we're running server on port: " + port);
};

function homeSendFile(req, res){
    const homePath = path.join(__dirname, 'index.html');
    res.status(200).sendFile(homePath);
};

function addStatic () {
    return express.static(path.join(__dirname, 'public'));
}

// Now let's add the static files with express middleware
app.use(addStatic());

// use this to only send one file


//app.get('/' , homeSendFile);
app.listen(port, listenCB);