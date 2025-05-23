const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./source files/Controllers/User')
const Admin = require('./source files/Controllers/Admin');
const Routemodel = require('./source files/Controllers/Route');
const Seat = require('./source files/Controllers/Seats');
const Station = require('./source files/Controllers/Station');
const Train = require('./source files/Controllers/Trainlist');
const Ticket = require('./source files/Controllers/Booktrain')
mongoose.connect('mongodb+srv://sherine:flori@cluster0.i6fy0fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    dbName:"Booking"
}).then(()=>{console.log("DATABASE CONNECTED SUCCESSFULLY")}).catch((error)=>{console.log(error)})

app.use(express.json()) 
app.use(cors())
app.use(User) 
app.use(Admin)
app.use(Routemodel)
app.use(Seat)
app.use(Station)
app.use(Train)
app.use(Ticket)
app.listen(8000,()=>{
    console.log("SERVER STARTED")
})