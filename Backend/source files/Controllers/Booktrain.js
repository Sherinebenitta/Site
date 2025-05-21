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
})

module.exports = router