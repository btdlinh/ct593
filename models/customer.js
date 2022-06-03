//mỗi bản là mỗi file model

const con = require("../utils/database");

const insert = (name,email,password)=>{
    var sql = "INSERT INTO customers (cus_name, cus_email, cus_passwd) VALUES ?";
    var values=[[name,email,password]];
    // var  values = [
    //                   ["Diệu Linh", "linhkookie1997@gmail.com", "123456"],
    //                   ["Tae", "tae1230@gmail.com",  "123456"],
    //                   [ "Min", "minj1013@gmail.com", "123456"]
    // ];
    
    con.query(sql, [values], function (err, result) {
        if (err) {
            console.log(err)
            return false;
        }
        // console.log("Nội dung vừa thêm vào: " + result.affectedRows);
    });
    return true;
    // });
}


module.exports = {
    insert
}