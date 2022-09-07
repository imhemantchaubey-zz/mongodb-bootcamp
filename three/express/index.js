var express = require("express")
var app = express()
app.use(express.json())

app.get("/sqr", (req, res) => {
  num = req.query.num
  res.send(`Square of ${num} is ${num*num}`)
});

app.get("/add", (req, res) => {
  num1 = parseInt(req.query.num1)
  num2 = parseInt(req.query.num2)
  res.send(`${num1} + ${num2} is ${num1 + num2}`)
});

app.post("/sub", (req, res) => {
  num1 = parseInt(req.body.num1)
  num2 = parseInt(req.body.num2)
  res.send(`${num1} - ${num2} = ${num1 - num2}`)
});

app.get("/mul", (req, res) => {
  num1 = parseInt(req.body.num1)
  num2 = parseInt(req.body.num2)
  res.send(`${num1} * ${num2} = ${num1 * num2}`)
});

app.post("/div", (req, res) => {
  num1 = parseInt(req.body.num1)
  num2 = parseInt(req.body.num2)
  res.send(`${num1} / ${num2} = ${num1 / num2}`)
});

app.listen(8989, () => {
console.log("Listening at port 8989: http://localhost:8989/")
})