const Router = require('express');
const router = Router();
const Station = require('../Models/Station')

router.post('/station',async(req,res)=>{
    const station = await Station.create(req.body);
    res.json(station)
})

module.exports = router