const Router = require('express');
const router = Router();
const Train = require('../Models/Trainslist');

router.post('/train',async(req,res)=>{
    const createtrain = await Train.create(req.body);
    res.json(createtrain)
})

module.exports = router;