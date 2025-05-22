const mongoose = require('mongoose');

const Bookschema =  new mongoose.Schema({
    PassengerName:String,
    Age:Number,
    Members:Number,
    Train_id:{
        ref:"Trains",
        type:mongoose.Schema.Types.ObjectId
    },
    User_id:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId
    }

});

const Bookmodel = mongoose.model('Tickets',Bookschema);
module.exports = Bookmodel