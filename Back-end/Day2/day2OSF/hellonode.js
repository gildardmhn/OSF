var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var bodyParser   = require('body-parser');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/oi', function(req, res) {
    res.send(m.name());
})

app.get('/', function (req, res) {
    res.render('home',{
        item: "Lorem Ipsum"
    })
});


app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});