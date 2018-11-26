var express = require('express');
var app = express();
var myFunctions = require('./myFunctions')

var bodyParser   = require('body-parser');
var bodyParser   = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/odd/:number', function(req, res) {
    let result = myFunctions.isOdd(req.params.number)
    if(result)
        res.send("O número " +req.params.number+ " é par.")
    else
        res.send("O número " +req.params.number+ " é ímpar.")
})

app.get('/random', function (req, res) {
    let result = myFunctions.myRandom()
    res.render('RandomNumber',{
        number: result
    })
});

app.get('/more/:number', function(req, res){
    let result = myFunctions.moreThan5(req.params.number)
    if(!result)
        res.render('More', {
            number: req.params.number
        })
    else
        res.send("O numero " +req.params.number+ "  é maior que 5")
})

app.get('/array', function(req, res){
    let meuArray = [];
    meuArray = myFunctions.fillArray()
    res.render('Array', {
        meuArray: meuArray
    })
})

app.listen(3050, function () {
  console.log('App listening on port 3050!');
});
