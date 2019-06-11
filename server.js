'use strict'

const Hapi = require('hapi');
const Request = require('request');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server();

const API_TOKEN = '131d284ab2f442d5b3b79c7c868bd37c';

server.connection({
	host: '127.0.0.1',
	port: 3000
});

// Register vision for our views
server.register(Vision, (err) => {
	server.views({
		engines: {
			html: Handlebars
		},
		relativeTo: __dirname,
		path: './views',
	});
});

// Show teams standings
server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		Request({
			url: 'http://api.football-data.org/v2/teams',
			headers : {
				'X-Auth-Token': API_TOKEN
		  }
		},
		function (error, response, body) {
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

// start the Hapi server instance
server.start((err) => {
	if (err) {
		throw err;
	}

	console.log(`Server running at: ${server.info.uri}`);
});


