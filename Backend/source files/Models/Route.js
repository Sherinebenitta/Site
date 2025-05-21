const mongoose = require('mongoose');

const Routeschema = new mongoose.Schema({
    Routeway:String,    
});

const Routemodel = mongoose.model('Route',Routeschema);
module.exports = Routemodel;