const Router = require('express');
const router = Router();
const User = require('../Models/User')
const webtoken = require('jsonwebtoken')

router.post("/sign-in",async(req,res)=>{
    const user = req.body
    const presentuser = await User.findOne({Username:user?.Username})
    if(presentuser) return res.status(500).send("User Already Present")
    const createuser = await User.create(user)
    res.json(createuser)
});

router.post("/login-user",async(req,res)=>{
    const loginuser = req.body
    const presentuser = await User.findOne({Username:loginuser?.Username})
    if(!presentuser) return res.status(500).send("User Not Registered Yet")
    if(loginuser?.Password != presentuser?.Password) return res.status(500).send("Invalid password")
    const token = await webtoken.sign({User:presentuser},'User')
    res.json({User:presentuser,token})
})

module.exports = router;
