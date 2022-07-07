const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const databaseName = "astralis"

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: databaseName
  });

  con.connect((error)=>{
    if (error) throw error;

    
    console.log(`connected to database: ${databaseName}`) 
  })
  


  
  
router.use((req,res,next)=> {

    next();
})


router.route("/")
.get((req,res)=> {

  
        con.query("SELECT * FROM data", function (err, result, fields) {
          if (err) throw err;
            res.send(result)
        });


        
        
       
    
        
})

module.exports = router