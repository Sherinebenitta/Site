const Router = require('express');
const router = Router();
const Station = require('../Models/Station')

router.post('/station',async(req,res)=>{
    const station = req.body;
    const presentstation = await Station.findOne({Name:station?.Name})
    if(presentstation) return res.status(500).send("Station already been registered");
    const createstation = await Station.create(station);
    res.json(createstation)
});

router.get('/getstation',async(req,res)=>{
    const getstation = await Station.find();
    res.json(getstation)
})

module.exports = router