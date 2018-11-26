const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

module.exports = function() {
    const server = express(),
        create,
        start;

    create = function(config){
        const routes = require('./routers');

        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        server.set('viewDir', config.viewDir);

        server.use(bodyParser.urlencoded({ extended: true }));

        server.set('views', server.get(viewDir));
        server.set('view engine', "ejs");

        routes.init(server);
    }

    start = function(){
        let hostname = server.get('hostname');
            port = server.get('port');

            server.listen(port, function(){
                console.log('Express server listening on - http://' + hostname + ':' + port);
            })
    }

    return {
        create: create,
        start: start
    };
};