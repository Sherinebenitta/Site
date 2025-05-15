const Router = require('express');
const router = Router();
const Route = require('../Models/Route')

router.post('/route',async(req,res)=>{
    const route = await Route.create(req.body);
    res.json(route)
})

module.exports = router