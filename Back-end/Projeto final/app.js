const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static(__dirname + '/views'));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let home = 'http://localhost:8000'
let url = 'https://cryptic-retreat-41638.herokuapp.com/api/contacts'
let url2 = 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts'

//Get all contacts
app.get('/', function(req, res){
    request.get(url, function(request, response, body){
        let datas = JSON.parse(body);
        res.render('List',{
            contatos: datas.data
        })
    })
})


//renders the Register page
app.get('/register', function(req, res){
    res.render('Register', {
        contato: null
    });
})


//saves a contact
app.post('/register', function(req, res){
    
    let datas = {
        id: req.body.id,
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone
    }
    
    request.post({
        uri:url,
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(datas)
        },
        function(err, response, body){
        }
    )
    res.redirect(home)
})

//renders the search page
app.get('/search', function(req, res){
    res.render('Search') 
});


// research a contact by its id
app.post('/search', function(req, res){
    let myId = req.body.id;
    request.get(url+'/'+myId, function(request, response, body){
        let dados = JSON.parse(body)
        console.log(url+'/'+myId)
        res.render('ContactDetails',{
            contato: dados.data
        })
        console.log()
        console.log(body)
    })
});


//delete a contact
app.get('/delete/:id', function(req, res){
    let myId = req.params.id;
    request.delete(url+'/'+myId, function(request, response, body){
        console.log(body)
    })
    //load the list page
    res.redirect(home)
})


// fills the update view with the datas
app.get('/update/:id', function(req, res){
    let myId = req.params.id;
    request.get(url+'/'+myId, function(request, response, body){
        let dados = JSON.parse(body)
        res.render('updateForm',{
            contato: dados.data
        })
    })
})

//update a contact
app.post('/update', function(req, res){
    let dados = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    }
    request.put({
        uri:url+'/'+dados.id,
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body: require('querystring').stringify(dados),
        function(err, response, body){
        }
    })  
    res.redirect(home)
})

app.listen(8000);