//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({exteded:true}));

app.get("/", function(req,res) {
res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function(req, res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var answer = num1 + num2;

res.send("The answer is " + answer);

});

app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var resultBmi = (weight/(height * height)) * 703;

  res.send("YOUR BMI IS " + resultBmi);
});

app.listen(3000, function() {
  console.log("SERVER STARTTED");
});
