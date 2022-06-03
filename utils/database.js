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
    //   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, cus_name VARCHAR(255), cus_email VARCHAR(255), cus_passwd VARCHAR(255))";

    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Tạo bảng thành công");
    //   });
    var sql = "INSERT INTO customers (cus_name, cus_email, cus_passwd) VALUES ?";
   
    var  values = [
                      ["Diệu Linh", "linhkookie1997@gmail.com", "123456"],
                      ["Tae", "tae1230@gmail.com",  "123456"],
                      [ "Min", "minj1013@gmail.com", "123456"]
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Nội dung vừa thêm vào: " + result.affectedRows);
      });
    });