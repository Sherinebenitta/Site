const mongoose = require('mongoose');

const Bookschema =  new mongoose.Schema({
    Date:Date,
    Time: {
    type: String,
    required: true,
    match: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/ 
    },
    PassengerName:String,
    Age:Number,
    Members:Number,
    User_id:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId
    },
    Train_id:{
        ref:"Trains",
        type:mongoose.Schema.Types.ObjectId
    },
    Seat_id:{
        ref:"Seat",
        type:mongoose.Schema.Types.ObjectId
    },
    Route_id:{
        ref:"Route",
        type:mongoose.Schema.Types.ObjectId
    },
    Station_id:{
        ref:"Station",
        type:mongoose.Schema.Types.ObjectId
    }

});

const Bookmodel = mongoose.model('Tickets',Bookschema);
module.exports = Bookmodel