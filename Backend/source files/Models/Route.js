const mongoose = require('mongoose');

const Routeschema = new mongoose.Schema({
    Startpoint:String,
    Destination:String
    
});

const Routemodel = mongoose.model('Route',Routeschema);
module.exports = Routemodel;