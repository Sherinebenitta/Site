const mongoose = require('mongoose');

const Seatschema = new mongoose.Schema({
    Seat_class:{
        type:String,
        required:true
    },
    Code:{
        type:Number,
        required:true
    },
    SeatNumbers:{
        type:Number,
        required:true
    }
});
const Seatmodel = mongoose.model('Seat',Seatschema);
module.exports = Seatmodel;