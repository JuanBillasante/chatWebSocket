
import express = require('express');
import socketIO = require('socket.io');
import path = require('path');


const app: express.Application = express();
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
const socket = require('socket.io');
const http = require('http');


/* app.use(morgan('dev')); */
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(PORT, function () {
  console.log('Server on port '+PORT);
});


var io = socket(server);

io.on('connection', (socket : socketIO.Socket)=>{
  console.log('Socket connected');
  socket.on('mensaje',(mensaje : string)=>{
    console.log(mensaje);
    io.emit('mensaje',mensaje);
  });
});





