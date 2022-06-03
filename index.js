
const express = require("express");
const customerController = require("./controllers/customer");
const app = express();

const bodyParser = require("body-parser");
const customerRouter = require("./routers/customer");

app.use(express.static("public"));
app.use(bodyParser())

app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", function(req, res){
  res.render("homePage");
});

app.get("/te",(req,res)=>{
  res.send("ok")
})


app.post("/insert",(req,res)=>{
  let result = customerController.insert(req.body.name,req.body.email,req.body.password);
  console.log(result? "Đúng":"Sai")
  if(result){
    res.send("Thêm thành công")
  }else{
    res.send("Thêm không thành công!")
  }
  return "jungguk"
})// khai báo dị nè ngắn 

app.use("/v1",customerRouter); //tích họp route vào app với đuôi là customer (có thể đổi) khi dổi thì url đổi

app.listen(8000);

