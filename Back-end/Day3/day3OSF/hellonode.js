const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let url = 'https://reqres.in/api/'

//1 lista um usuario
app.get('/getUser', function(req, res){
    request.get(url+'users/6', function(error, response, body){
        res.send(body);
    });
});
//2 lista os usuario da pagina
app.get('/userList', function(req, res){
    request.get(url+'users?page=8', function(request, response, body){
        res.send(body)
    });
});
//3 cadastra um contato
app.get('/user', function(req, res){
    let data = {
        "name": "morpheus",
        "job": "leader"
    };
    request.post({
        uri: url+'users',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});
//4 atualiza os dados de um usuario
app.get('/user/:id', function(req, res){
    let data = {
        "name": "morpheus",
        "job": "Outra coisa"
    };
    request.put({
        uri: url+'users/'+req.params.id,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});

//5 apaga um usuario
app.get('/userDelete/:id', function(req, res){
    request.delete({
        uri: url+'users/'+req.params.id,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});

//6 realiza o cadastro de um usuario

app.get('/cadastro', function(req, res){
    let data = {
        "email": "gildard@mail.com",
        "password": "OsfFutureEmployee"
    }
    request.post({
        uri: url+'register',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});

//7 realiza login

app.get('/login', function(req, res){
    let data = {
        "email": "gildard@mail.com",
        "password": "OsfFutureEmployee"
    }
    request.post({
        uri: url+'login',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});

//8 resposta demorada
app.get('/user/delay/:delay', function(req, res){
    let data = {
        "email": "gildard@mail.com",
        "password": "OsfFutureEmployee"
    }
    request.get({
        uri: url+'register'+req.params.delay,
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(data),
        },
        function(request, response, body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
        })
});

// usuando o formulario com input
app.get('/test1', function(req, res){
    res.render('form')
});

app.post('/test1', function(req,res){
    var postData = {
        "name": req.body.name,
        "job": req.body.job
    };
    request.post({
        uri:"https://reqres.in/api/users",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
        },
        function(err,response,body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
    });
});

// usando o formulario somento com o butão
app.get('/test2', function(req, res){
    res.render('form2')
});

app.post('/test2', function(req,res){
    var postData = {
        "name": "Gil",
        "job": "Aluno"
    };
    request.post({
        uri:"https://reqres.in/api/users",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
        },
        function(err,response,body){
            console.log(body);
            console.log(response.statusCode);
            res.send(body)
    });
});


app.listen(8085);