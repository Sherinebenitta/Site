const Router = require('express');
const router = Router();
const Train = require('../Models/Trainslist');
const check = require('../Middleware/Admincheckpoint')

router.post('/train',check,async(req,res)=>{
    const train = req.body;
    const presenttrain = await Train.findOne({TrainName:train?.TrainName});
    if(presenttrain) return res.status(500).send("Train already registered");
    const createtrain = await Train.create(train);
    res.json(createtrain)
});
router.get('/gettrain',async(req,res)=>{
    const gettrain = await Train.find().populate('Route_id').populate('Station_id')
    res.json(gettrain)
})

router.get('/getseat/:Train_id',async(req,res)=>{
    const id = req.params.Train_id
    const gettrain = await Train.find({_id:id}).populate('Seat_id')
    res.json(gettrain)
})
router.get('/gettrain/:routeid',async(req,res)=>{
    const route_id = req.params.routeid
    const gettrain = await Train.find({Route_id:route_id})
    res.json(gettrain)
})

module.exports = router;