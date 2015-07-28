var hapi = require('hapi');
var server = new hapi.Server();

var port = process.env.PORT || 3000;
server.connection({port: port});

var text = "Hello World";

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		var response = { data: text };
		return reply(JSON.stringify(response)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/lowerCase',
	handler: function(request, reply){
		var response = { data: text.toLowerCase() };
		return reply(JSON.stringify(response)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/upperCase',
	handler: function(request, reply){
		var response = { data: text.toUpperCase() };
		return reply(JSON.stringify(response)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/camelCase',
	handler: function(request, reply){
		var response = { data: 'aaa' };
		return reply(JSON.stringify(response)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/noSpace',
	handler: function(request, reply){
		var response = { data: text.replace(' ', '') };
		return reply(JSON.stringify(response)).type('application/json');
	}
});

server.start(function () {
	console.log('Hello World as a Service');
	console.log('Server is running at ', server.info.uri);
});

exports.server = server;
