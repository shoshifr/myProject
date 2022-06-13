const mongoose=require('mongoose');
module.exports =
    mongoose => {
const dishesSchema = new mongoose.Schema({ code: String, name: String,wheigt:Number , price :Number,category:String
 });
const dishes = mongoose.model('dishes', dishesSchema);

return dishes;

    };