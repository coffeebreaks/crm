const express = require('express')
const router = express.Router()
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node"
  });

  con.connect()

  
  
router.use((req,res,next)=> {

    next();
})


router.route("/")
.post((req,res)=> {

  
        // con.query("SELECT * FROM data", function (err, result, fields) {
        //   if (err) throw err;
        //     res.send(result)
        // });
        
        res.send("send")

        
        
       
    
        
})

module.exports = router