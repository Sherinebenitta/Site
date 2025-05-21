const Router = require('express');
const router = Router();
const Seat = require('../Models/Seat')

router.post('/seat',async(req,res)=>{
    const seat = req.body;
    const presentseat = await Seat.findOne({Seat_class:seat?.Seat_class})
    if(presentseat) return res.status(500).send("Seat class already added");
    const createseat = await Seat.create(seat);
    res.json(createseat);
});

router.get('/getseat',async(req,res)=>{
    const getseat = await Seat.find();
    res.json(getseat)
})
module.exports = router;