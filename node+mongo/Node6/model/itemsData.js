
const mongoose=require('mongoose');
module.exports =
    mongoose => {
const ItemSchema = new mongoose.Schema({ code: String, name: String, 
    currency:{type:String ,enum:['$','ILS']},
    price :Number
 });
const items = mongoose.model('items', ItemSchema);

return items;

    };