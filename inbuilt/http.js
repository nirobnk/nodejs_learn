let http = require("http");

let server = http.createServer((req, res) => {
  res.write("<h1>Server is running 12</h1>");
  res.end();
});

server.listen(7600);
