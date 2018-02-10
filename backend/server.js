var http = require('http');
var app = require('./app');
var port = '5000';
var hostname = '127.0.0.1';

var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log('Server listening on port ' + port);
});