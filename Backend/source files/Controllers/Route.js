const Router = require('express');
const router = Router();
const Route = require('../Models/Route')

router.post('/route',async(req,res)=>{
    const routes = req.body
    const presentroute = await Route.findOne({Startpoint:routes?.Startpoint});
    if(presentroute?.Routeway == routes?.Routeway) return res.status(500).send("Routeway added")
    const createroute = await Route.create(routes);
    res.json(createroute)
});
router.get('/getroute',async(req,res)=>{
    const getroute = await Route.find();
    res.json(getroute)
})

module.exports = router