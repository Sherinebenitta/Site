const Router = require('express');
const router = Router();
const Route = require('../Models/Route')

router.post('/route',async(req,res)=>{
    const routes = req.body
    const presentroute = await Route.findOne({Startpoint:routes?.Startpoint});
    if(presentroute){ if(presentroute?.Destination == routes?.Destination) return res.status(500).send("Route already present")}
    const createroute = await Route.create(routes);
    res.json(createroute)
})

module.exports = router