
import express = require('express');
import { urlencoded } from 'body-parser';

var bodyParser = require('body-parser');
const app: express.Application = express();
const es6Renderer = require('express-es6-template-engine');
const PORT = process.env.PORT || 5000;
const morgan = require ('morgan');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.listen(PORT, function () {
  console.log('Server on port '+PORT);
});


app.get('/', function (req, res) {
  res.send("Hola")
});

app.post('/', urlencodedParser ,function(req,res){

});


