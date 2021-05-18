const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req, res){
  console.log(req.body);
  res.send("thanks for  posting the form");
});

app.listen(3000,function(){
  console.log("server has been started on port 3000");
});
