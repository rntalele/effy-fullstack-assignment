const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
})

const User = mongoose.model('user',userSchema);
module.exports.User = User;