const express = require("express")
const app = express()
const mysql = ("./mysql/config.js")
const addRow = require("./routes/addRow")
const index = require("./routes/index")
const getData = require("./routes/getData")
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use("/addRow", addRow)
app.use("/getData", getData)
app.use("/", index)

mysql

app.listen(8000, ()=>{console.log("🟢 Online")})