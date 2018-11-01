var http = require("http"); // using http module

// 함수 자체가 1급 객체.
// creating server using anonymous function
// 200 is "OK"
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Hello World</h2>");
  response.end();

}).listen(8888); // it will listen by(?) port 8888

console.log("response ends");
