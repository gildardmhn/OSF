var express = require('express');
var app = express();
var myFunctions = require('./myFunctions')

app.get('/Home', function (req, res) {
  res.send('Hi you are on the Home Page!');
});

app.get('/root/:numero', function(req, res){
    let result = myFunctions.roots(req.params.numero)
    res.send("A raiz quadrada de " +req.params.numero + " é " +result)
})

app.get('/square/:numero', function(req, res){
    let resultado = myFunctions.square(req.params.numero)
    res.send("o quadrado de " +req.params.numero + " é " +resultado)
})

app.listen(8081, function () {
  console.log('App listening on port 8081!');
});
