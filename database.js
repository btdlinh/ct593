     var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "ct593"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, cus_name VARCHAR(255), cus_email VARCHAR(255), cus_passwd VARCHAR(255))";

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tạo bảng thành công");
      });
    });
    