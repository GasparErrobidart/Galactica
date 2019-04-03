const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let highScore = 0;

app.post("/high-score",(req,res)=>{
  let newScore = parseInt(req.body.score);
  console.log("New score:",newScore);
  if(highScore < newScore){
    highScore = newScore;
  }
  res.json({"high-score":highScore});
});

app.get("*",(req,res)=>{
  res.send("Hey");
});

app.listen(1234,()=> console.log("Server running on port 1234"));
