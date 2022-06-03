
const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", function(req, res){
  res.render("homePage");
});


app.listen(8000);
