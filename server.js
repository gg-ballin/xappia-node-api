
var express = require("express"); 
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.send("nodemon")
});

app.get('/:id', function(req, res, next){
    res.send("hola hola hola")
});

app.listen(app.get('port'));