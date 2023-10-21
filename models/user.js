let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:String,
    city:String,
    //  nums:[ {num:Number, approve:Boolean } ]
})

let User =  mongoose.model('user', userSchema);
module.exports = User;