     var mysql = require('mysql');

     // export cái này ra 
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ct593"
    });
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    module.exports = con;