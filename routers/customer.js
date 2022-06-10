const express = require("express")

const customerRouter = express.Router()

customerRouter.get("/",(req,res)=>{
    res.send("Customer Get");
})

module.exports = customerRouter;