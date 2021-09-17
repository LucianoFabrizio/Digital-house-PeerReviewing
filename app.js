const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;      
// const bcrypt = require("bcryptjs")
app.use(express.static('public'));

app.listen(PORT,()=>console.log("is running at: http://localhost:3000/"));

app.get("/", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/home.html")   //path.join tambien es valido
    res.sendFile(htmlPath)                                         //get es para cada pestaña de la pagina
});
app.post("/", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/home.html")   //path.join tambien es valido
    res.sendFile(htmlPath)                                         //get es para cada pestaña de la pagina
});

app.get("/register", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/register.html")   
    res.sendFile(htmlPath)                                       
});

app.get("/login", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/login.html")   
    res.sendFile(htmlPath)                                       
});


