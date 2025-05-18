const Router = require('express');
const router = Router();
const Admin = require('../Models/Admin');
const webtoken = require('jsonwebtoken')

router.post('/sign-up',async(req,res)=>{
    const admin = req.body;
    const presentadmin = await Admin.findOne({AdminId:admin?.AdminId})
    if(presentadmin) return res.status(409).send("Admin already Exist")
    const createadmin = await Admin.create(admin);
    res.json(createadmin)
});

router.post("/login-admin",async(req,res)=>{
    const admin = req.body;
    const presentadmin = await Admin.findOne({AdminId:admin?.AdminId});
    if(!presentadmin) return res.status(401).send("No such Admin");
    if(presentadmin?.Password != admin?.Password) return res.status(401).send("Invalid Password");
    const createtoken = await webtoken.sign({Admin:presentadmin},'Admin');
    res.json({Admin:presentadmin,createtoken})
})
module.exports = router;