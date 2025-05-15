const Router = require('express');
const router = Router();
const User = require('../Models/User')

router.post("/sign-in",async(req,res)=>{
    const user = await User.create(req.body)
    res.json(user)
})

module.exports = router;
