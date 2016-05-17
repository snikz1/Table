var express = require('express');
var cons = require('consolidate');
var app = express();
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swig = require('swig');
var mongoose = require('mongoose');
var Statistics = require('./models/statistics').Statistics;
mongoose.connect('mongodb://localhost/test2');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));


app.get('/',function(req,res){
    res.render('index');
});

app.get('/common',function(req,res){


    Statistics.find({},function(err,statica){

        res.jsonp(statica);
        //statica.forEach(function(staticas){
        //
        //})
    })
});

app.post('/arrival',function(req,res){
    console.log(req.body.name,req.body.price);

    var statica = new Statistics({
        price: req.body.price,
        name: req.body.name

    });

    statica.save(function(err){
    if (err)
        throw err;

       else res.jsonp(statica);
    });

    //
    //statica.create({
    //}).exec(function(err, createdSt){
    //    res.jsonp(createdSt)
    //})
});


app.listen(8080);