const express = require("express"); //導入express模塊
//request 請求 get or post,請求內容
//response 響應 即將返回給前端的訊息
//參數(端口port,ip地址,callback回調函數)
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.listen(3000, function () {
  console.log("Example app listening on port " + port + "!");
});

app.get("/getData", (req, res) => {
  if (req.query.number === "") {
    res.send("Lack of Parameter");
  } else if (isNaN(req.query.number)) {
    res.send("Wrong Parameter".toString());
    console.log( req.query.number);
  } else {
    console.log("hi")
    let num = req.query.number;
    let x = 0;
    for (let i = 1; i <= num; i++) {
      x = x + i;
    }
    console.log(x);
    res.send(x.toString());
  }
});
