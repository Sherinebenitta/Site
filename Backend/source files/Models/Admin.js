const mongoose = require('mongoose');

const Adminschema =  new mongoose.Schema({
    AdminId:Number,
    Password:String
})

const Adminmodel = mongoose.model('Admin',Adminschema);
module.exports = Adminmodel