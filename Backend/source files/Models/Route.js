const mongoose = require('mongoose');

const Routeschema = new mongoose.Schema({
    Place:String,
    Time:Date
});

const Routemodel = mongoose.model('Route',Routeschema);
module.exports = Routemodel;