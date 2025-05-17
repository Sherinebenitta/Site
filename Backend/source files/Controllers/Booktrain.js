const Router = require('express');
const router =  Router();
const Booking = require('../Models/Booktrain');
const generatetoken = require('../Middleware/Checkpoint');

router.post('/book',generatetoken,async(req,res)=>{
    const ticket = await Booking.create(req.body);
    res.json(ticket)
})

module.exports = router