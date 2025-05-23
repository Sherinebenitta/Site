const mongoose  = require ('mongoose');

const Stationschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Code:{
        type:Number,
        required:true
    },
    Location:{
        type:String,
        required:true
    }
});

const Stationmodel = mongoose.model('Station',Stationschema);
module.exports = Stationmodel