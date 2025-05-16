const mongoose = require('mongoose')

const Trainschema = new mongoose.Schema({
    TrainName:String,
    TrainCode:Number,
    Date:Date,
    JourneyTime:{
    type: String,
    required: true,
    match: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/
  },
  Route_id:{
        ref:"Route",
        type:mongoose.Schema.Types.ObjectId
    },
    Seat_id:{
        ref:"Seat",
        type:mongoose.Schema.Types.ObjectId
    },
    Station_id:{
        ref:"Station",
        type:mongoose.Schema.Types.ObjectId
    }
});

const Trainmodel = mongoose.model('Trains',Trainschema);
module.exports = Trainmodel