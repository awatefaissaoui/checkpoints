console.log("hello world");
var http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    if(request.url =="/")
   { response.writeHead(200, { "Content-Type": "text/html" });

    response.end("<h1>Hello Node !!! </h1>\n");}
    if (request.url == "/create") {
      fs.writeFileSync("Welcome.txt", "Hello node");
      response.writeHead(200, { "Content-Type": "text/html" });

      response.end("<h1>File created succefully </h1>\n");
    }
  })
  .listen(3000);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
