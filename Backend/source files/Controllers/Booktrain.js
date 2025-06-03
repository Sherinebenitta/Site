const Router = require('express');
const router =  Router();
const Booking = require('../Models/Booktrain');
const generatetoken = require('../Middleware/Checkpoint');

router.post('/book',generatetoken,async(req,res)=>{
    const ticket = req.body;
    const presentticket = await Booking.findOne({PassengerName:ticket?.PassengerName})
    if(presentticket) return res.status(500).send("Ticket already booked");
    const createticket = await Booking.create(ticket);
    res.json(createticket)
});

router.get('/getbooking/:userid',async(req,res)=>{
    const user_id = req.params.userid;
    const getticket = await Booking.find({User_id:user_id}).populate('Train_id')
    res.json(getticket)
})

router.get('/getticket',async(req,res)=>{
    const ticket = await Booking.find().populate('Train_id')
    res.json(ticket)
})
module.exports = router