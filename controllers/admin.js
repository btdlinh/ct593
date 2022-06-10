const customerModel= require("../models/customer")

const insert = (name,email,password)=>{
    return customerModel.insert(name,email,password);
}

module.exports = {
    insert
}