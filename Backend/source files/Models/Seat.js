const mongoose = require('mongoose');

const Seatschema = new mongoose.Schema({
    Seat_class:String,
    Code:Number,
    SeatNumbers:Number
});
const Seatmodel = mongoose.model('Seat',Seatschema);
module.exports = Seatmodel;