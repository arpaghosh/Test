// load the http module
var http = require('http');
var os  = require('os');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
var caller = request.connection.remoteAddress;
response.write("\nRequest received from: "+caller);
console.log("\nRequest received from caller "+caller);
  response.end("\nHello, welcome to the node app built using Docker on Jenkins v2 on Host: "+os.hostname()+"\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
