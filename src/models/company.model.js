const mongoose = require('mongoose');
const {userSchema} = require('../models');
const companySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    coordinates:{
        type:{
             _id:false,
            latitude:String,
            longitude:String
        }
    },
    users:{
        type:[userSchema]
    }
})

const Company = mongoose.model('company',companySchema);
module.exports.Company = Company;
