
import express = require('express');
import { urlencoded } from 'body-parser';
import socketIO = require('socket.io');
import path = require('path');

const bodyParser = require('body-parser');
const app: express.Application = express();
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
/* const urlencodedParser = bodyParser.urlencoded({ extended: false }) */
const socket = require('socket.io');
const http = require('http');



/* app.use(bodyParser.urlencoded({ extended: false })) */
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.static('public'));



var server = app.listen(PORT, function () {
  console.log('Server on port '+PORT);
});


var io = socket(server);

io.on('connection', (socket : socketIO.Socket)=>{
  console.log('Socket connected');
  socket.on('message',(message : string)=>{
    console.log('Hola');
    console.log(message);
    io.emit('message',{message});
  });
});





