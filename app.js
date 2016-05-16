var express = require('express');
var cons = require('consolidate');
var app = express();
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swig = require('swig');

//mongoose.connect('mongodb://localhost/test2');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));


app.get('/',function(req,res){
    res.render('index');
});




app.listen(8080);