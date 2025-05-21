const webtoken = require('jsonwebtoken');
const Admincheckpoint =async(req,res,next)=>{
    const token = req.headers.createtoken;
    if(!token) return res.status(401).send("Token not generated yet");
    const Admin = await webtoken.verify(token,'Admin');
    req.headers['Admin'] = Admin?.Admin
    next();
    

}

module.exports = Admincheckpoint;