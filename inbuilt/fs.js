let fs = require("fs");
let u = "my name is Buddhika Niroshan Kumarasinghe";

// fs.writeFileSync("mycode.txt", u, (err) => {
//   if (err) throw err;
//   console.log("Task done");
// });

// fs.readFile("mycode.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//const fs = require('fs');

// console.log('Start');
// fs.readFileSync('mycode.txt', 'utf8', (err, data) => { // Asynchronous file read
//   if (err) throw err;
//   console.log(data);
// });
// console.log('End');

//using synchronous method with error handling

try {
  fs.writeFileSync("mycode.txt", u);
  console.log("file has been written successfully!!");
} catch (err) {
  console.error("error occured while writing the file", err);
}

console.log("dimuthu");

try {
  const data = fs.readFileSync("mycode.txt", "utf-8");
  console.log("Readfile successfully!!");
  console.log("content:", data);
} catch (err) {
  console.error("error occured while reading the file", err);
}
