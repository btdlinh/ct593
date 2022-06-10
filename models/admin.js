//mỗi bản là mỗi file model

const con = require("../utils/database");

const insert = (name,email,password)=>{
    var sql = "INSERT INTO admin (ad_name, ad_email, ad_passwd) VALUES ?";
    var values=[[name,email,password]];
    var  values = [
                      ["Bùi Thị Diệu Linh", "linhb1809253@student.ctu.edu.vn", "123456"]
    ];
    
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