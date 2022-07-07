var mysql = require('mysql');

const dbName = "astralis"

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`CREATE DATABASE ${dbName}`, function (err, result) {
    if (err) throw err;
    console.log("Database created");
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: dbName
      });

    var sql = "CREATE TABLE data (name VARCHAR(255), value VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
});


   
