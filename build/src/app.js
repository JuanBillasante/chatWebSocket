"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5000;
var morgan = require('morgan');
/* const urlencodedParser = bodyParser.urlencoded({ extended: false }) */
var socket = require('socket.io');
var http = require('http');
/* app.use(bodyParser.urlencoded({ extended: false })) */
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));
var server = app.listen(PORT, function () {
    console.log('Server on port ' + PORT);
});
var io = socket(server);
io.on('connection', function (socket) {
    console.log('Socket connected');
    socket.on('message', function (message) {
        console.log('Hola');
        console.log(message);
        io.emit('message', { message: message });
    });
});
