
import express = require('express');
import { urlencoded } from 'body-parser';
import socketIO = require('socket.io');

const bodyParser = require('body-parser');
const app: express.Application = express();
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
/* const urlencodedParser = bodyParser.urlencoded({ extended: false }) */
const socket = require('socket.io');
const http = require('http');



app.set('views', 'views');
app.set('view engine','ejs');
/* app.use(bodyParser.urlencoded({ extended: false })) */
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.static('public'));


var server = app.listen(PORT, function () {
  console.log('Server on port '+PORT);
});

var io = socket(server);

io.on('connection', (socket:socketIO.Socket)=>{
  console.log('Socket connected')
})

app.get('/', function (_req, _res) {
  
});



