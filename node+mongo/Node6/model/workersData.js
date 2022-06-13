const mongoose=require('mongoose');
module.exports =
    mongoose => {
const workerSchema = new mongoose.Schema({ code: String, name: String,age:Number ,address:String,statusWork:String, statusW:{type:String ,enum:['מתחיל','נסיון','ותיק']}});
const works = mongoose.model('works', workerSchema);

return works;

    };