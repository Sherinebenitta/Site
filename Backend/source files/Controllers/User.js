const Router = require('express');
const router = Router();
const User = require('../Models/User')
const webtoken = require('jsonwebtoken')

router.post("/sign-in",async(req,res)=>{
    const user = req.body
    const presentuser = await User.findOne({Username:user?.Username})
    const presentpass = await User.findOne({Password:user?.Password})
    if(presentuser) return res.status(409).send("User Already Present")
    else if(presentpass) return res.status(409).send("Password invalid")
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

router.get("/getuser/:userid",async(req,res)=>{
    const id = req.params.userid;
    const getuser = await User.findById(id);
    res.json(getuser)
})

module.exports = router;
