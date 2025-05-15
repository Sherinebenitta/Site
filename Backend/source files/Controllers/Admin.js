const Router = require('express');
const router = Router();
const Admin = require('../Models/Admin')

router.post('/sign',async(req,res)=>{
    const admin = await Admin.create(req.body)
    res.json(admin)
})
module.exports = router;