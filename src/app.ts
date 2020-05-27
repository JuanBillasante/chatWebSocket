
import express = require('express');
import socketIO = require('socket.io');



const app: express.Application = express();
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
const socket = require('socket.io');


/* app.use(morgan('dev'));  */
app.use(express.static('public'));


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





