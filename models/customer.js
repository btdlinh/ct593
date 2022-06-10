//mỗi bản là mỗi file model

const con = require("../utils/database");

const insert = (name,email,password)=>{
    var sql = "INSERT INTO customers (cus_name, cus_email, cus_passwd) VALUES ?";
    var values=[[name,email,password]];

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