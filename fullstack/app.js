let express = require("express");
let app = express();
let dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 6700;

//default
app.get("/", (req, res) => {
  res.send("hii from Express");
});

app.get("/test", (req, res) => {
  res.send("hii from test");
});

app.listen(port, (err) => {
  if (err) throw err;
  else {
    console.log(`server is running on localhost:${port}`);
  }
});
