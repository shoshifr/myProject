const dotenv = require('dotenv');

dotenv.config();
// console.log(process.env);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
console.log(process.env.URL);
db.mongoose = mongoose;
db.URL = process.env.URL;
db.items = require("./itemsData.js")(mongoose);
db.client=require("./clientData.js")(mongoose);
db.works=require("./workersData.js")(mongoose);
db.dishes=require("./dishesData.js")(mongoose);


module.exports = db;