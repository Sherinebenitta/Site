const webtoken = require('jsonwebtoken');
const generatetoken = async(req,res,next)=>{
    const token = req.headers.token
    if(!token) return res.status(500).send("Token Not generated");
    const User = await webtoken.verify(token,'User');
    req.headers['User'] = User?.User
    next();

}
module.exports = generatetoken;