const mongoose  = require ('mongoose');

const Stationschema = new mongoose.Schema({
    Name:String,
    Code:Number,
    Location:String
});

const Stationmodel = mongoose.model('Station',Stationschema);
module.exports = Stationmodel