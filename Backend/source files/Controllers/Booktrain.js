const Router = require('express');
const router =  Router();
const Booking = require('../Models/Booktrain');

router.post('/book',async(req,res)=>{
    const ticket = await Booking.create(req.body);
    res.json(ticket)
})

module.exports = router