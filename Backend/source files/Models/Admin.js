const mongoose = require('mongoose');

const Adminschema =  new mongoose.Schema({
    AdminId:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const Adminmodel = mongoose.model('Admin',Adminschema);
module.exports = Adminmodel