const express = require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('./source files/Controllers/User')
mongoose.connect('mongodb+srv://sherine:flori@cluster0.i6fy0fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    dbName:"Booking"
}).then(()=>{console.log("DATABASE CONNECTED SUCCESSFULLY")}).catch((error)=>{console.log(error)})

app.use(express.json())
app.use(User)
app.listen(8000,()=>{
    console.log("SERVER STARTED")
})