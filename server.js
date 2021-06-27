'use strict'

require('dotenv').config();

const Hapi = require('@hapi/hapi');
const Request = require('request');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');


const API_TOKEN = process.env.API_TOKEN || 'example-api-token-here-123456';
const HOST_PORT = process.env.HOST_PORT || 3000;
const HOST_IP = process.env.HOST_IP || 'localhost';


// Setup server connection properties
const server = new Hapi.server({
    host: HOST_IP,
    port: HOST_PORT
});


// Register vision for our views
server.register(require('@hapi/vision'));
server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views',
});


// Show teams standings
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        Request({
                url: 'http://api.football-data.org/v2/teams',
                headers: {
                    'X-Auth-Token': API_TOKEN
                }
            },

            function(error, response, body) {
                if (error || response.statusCode != 200) // Print the HTML for the Google homepage.
                {
                    console.error(error);
                    console.log(response);
                    console.log(body);
                }

                const data = JSON.parse(body);
                reply.view('index', { result: data });
            });
    }
});


exports.init = async() => {
    await server.initialize();
    return server;
};

exports.start = async() => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})