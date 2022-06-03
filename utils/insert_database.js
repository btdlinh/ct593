var mysql = require('mysql');
// khỏi cần khai báo lại chỉ càn import hôi
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ct593"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

// var sql = "INSERT INTO customers (cus_name, cus_email, cus_passwd) VALUES ?";

// var  values = [
//                   ["Diệu Linh", "linhkookie1997@gmail.com", "123456"],
//                   ["Tae", "tae1230@gmail.com",  "123456"],
//                   [ "Min", "minj1013@gmail.com", "123456"]
// ];

con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Nội dung vừa thêm vào: " + result.affectedRows);
  });
});