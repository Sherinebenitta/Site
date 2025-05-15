const Router = require('express');
const router = Router();
const Seat = require('../Models/Seat')

router.post('/seat',async(req,res)=>{
    const seat = await Seat.create(req.body);
    res.json(seat)
})

module.exports = router