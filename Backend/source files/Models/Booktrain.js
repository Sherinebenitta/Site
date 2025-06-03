const mongoose = require('mongoose');

const Bookschema =  new mongoose.Schema({
    PassengerName:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Members:{
        type:Array,
        required:true,
    },
    Train_id:{
        ref:"Trains",
        type:mongoose.Schema.Types.ObjectId
    },
    User_id:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId
    },
    Seat_id:{
        ref:"Seat",
        type:mongoose.Schema.Types.ObjectId
    }

});

const Bookmodel = mongoose.model('Tickets',Bookschema);
module.exports = Bookmodel