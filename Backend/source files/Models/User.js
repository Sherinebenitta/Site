const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

const usermodel = mongoose.model('User',userschema);
module.exports = usermodel