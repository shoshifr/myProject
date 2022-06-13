const db = require('../model/index')
const express = require('express');
var bodyParser = require('body-parser');

const req = require('express/lib/request');
async function add(req, res) {
    //console.log(req);
    let data = req.body;

    //console.log(req.query.item)
    if (data == undefined) {
        res.status(500).send("client not exist");
        return;
    }

    const clientModel = new db.client(data);
    try {
        var clientAfterSave = await clientModel.save(clientModel);
        
        console.log(clientAfterSave);
    } catch (ex) {
        console.log(ex);
        res.status(500).send(ex);
    }

    res.send("succsed add item");

}

async function GetById(req,res)
{
    let data = req.query.id|req.param.id;

    //console.log(req.query.item)
    if (data == undefined) {
        res.status(500).send("client not exist");
        return;
    }
var con=[
    {
      '$match': {
        'code':''+ data+''
      }
    }
  ]
   console.log(con);
    try {
        var clientAfterSave = await db.client.aggregate(con);
        
        console.log(clientAfterSave);
        res.send(clientAfterSave);
    } catch (ex) {
        console.log(ex);
        res.status(500).send(ex);
    }

    
}
module.exports = { add,GetById };