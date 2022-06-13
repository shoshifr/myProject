const express = require('express');
const routClient=require('./routing/clientRouter');
const routItem=require('./routing/itemsroutter');
var bodyParser = require('body-parser')
const NodeCache = require( "node-cache" );

const myCache = new NodeCache();

const app=express();


let value = myCache.get( "myKey" );
console.log(value);

if ( value == undefined ){
    console.log(" foudt");
    console.log(value);
}

console.log("not founct");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const db =require('./model');
console.log(db.URL);
db.mongoose.connect("mongodb://localhost:27017/products").
then(res=>console.log("connect"))
.catch(error=>{console.log(" not connect")});

app.listen(4000,function(){console.log("app start port 4000")});

app.get("/",function(req,res){
    res.send("start seles process");
});

app.use("/client",routClient)