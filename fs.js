let fs = require("fs");
let u = "my name is dimuthu";

fs.writeFile("mycode.txt", u, (err) => {
  if (err) throw err;
  console.log("Task done");
});
