let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String
    //  nums:[ {num:Number, approve:Boolean } ]
})

let Product =  mongoose.model('product', productSchema);
module.exports = Product;