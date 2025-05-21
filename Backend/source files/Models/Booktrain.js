const mongoose = require('mongoose');

const Bookschema =  new mongoose.Schema({
    PassengerName:String,
    Age:Number,
    Members:Number,
    Date:Date,
    Time: {
    type: String,
    required: true,
    match: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/ 
    },
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