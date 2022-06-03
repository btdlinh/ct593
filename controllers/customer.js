const customerModel= require("../models/customer")

const insert = (name,gmail,password)=>{
    return customerModel.insert(name,gmail,password);
}

module.exports = {
    insert
}