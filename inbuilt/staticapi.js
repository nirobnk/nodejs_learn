let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  //read file with fs
  fs.readFile("city.json", "utf-8", (err, data) => {
    if (err) throw err;
    //return data of file
    res.write(data);
    res.end();
  });
});

server.listen(6300);
