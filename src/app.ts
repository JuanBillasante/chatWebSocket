
import express = require('express');
import { urlencoded } from 'body-parser';

var bodyParser = require('body-parser');
const app: express.Application = express();
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var socket = require('socket.io');

app.set('views', 'views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.static('public'));


var server = app.listen(PORT, function () {
  console.log('Server on port '+PORT);
});

var io = socket(server);

io.on('coneccition',function(socket){
  console.log('Socket conected')
})

app.get('/', function (_req, _res) {
  
});



