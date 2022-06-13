const mongoose=require('mongoose');
module.exports =
    mongoose => {
const clientSchema = new mongoose.Schema({ code: String, name: String, statusC:{type:String ,enum:['מועדון','חדש','ותיק']} 

 });
const client = mongoose.model('client', clientSchema);

return client;

    };