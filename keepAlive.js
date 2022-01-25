const express = require("express");

const app = express()

 

app.get('/', (req, res) => {

  res.send("Use this link for uptime")

})

 

app.listen(3000, () => {

  console.log("Your Project is Working!! hehe")

})