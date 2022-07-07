const express = require("express")
const router = express.Router()
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "astralis"
  });

  con.connect()


router.use((req,res,next)=> {
    console.log("time: ", Date.now())
    next();
})


router.route("/")
.get((req,res)=> {

        console.log("Connected!");
        var sql = "INSERT INTO data (name, value) VALUES ('Company Inc', 'Highway 37')";

        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        
        
        
        res.send("Row") 
        console.log("row")
        
})

module.exports = router