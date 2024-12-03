let fs = require("fs");
let u = "my name is dimuthu";

fs.writeFile("mycode.txt", u, (err) => {
  if (err) throw err;
  console.log("Task done");
});

fs.readFile("mycode.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
