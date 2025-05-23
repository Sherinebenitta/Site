const mongoose = require('mongoose');

const Routeschema = new mongoose.Schema({
    Routeway:{
        type:String,    
        required:true
    }
});

const Routemodel = mongoose.model('Route',Routeschema);
module.exports = Routemodel;