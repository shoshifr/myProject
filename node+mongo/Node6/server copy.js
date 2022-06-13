const express = require('express');
const { addAbortSignal } = require('stream');
const routItem=require('./routing/itemsroutter');

const app=express();
const db =require('./model');
console.log(db.URL);
db.mongoose.connect("mongodb://localhost:27017/products").
then(res=>console.log("connect"))
.catch(error=>{console.log(" not connect")});

app.listen(4000,function(){console.log("app start port 4000")});

app.get("/",function(req,res){
    res.send("start seles process");
});

app.use("/items",routItem)