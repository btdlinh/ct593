const express = require("express")

const customerRouter = express.Router()

customerRouter.get("/",(req,res)=>{
    res.send("customer get");
})

module.exports = customerRouter;