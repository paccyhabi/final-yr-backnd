const {verify} = require('jsonwebtoken');
module.exports ={
    checkToken: (req, res, next) => { 
        let token = req.get('authorization');
        console.log(token)
        if(token){
            token = token.slice(7);
            verify(token, "qwe1234", (err, decoded) => {
                if (err) {
                    console.error("Token verification error:", err);
                    res.json({
                        message: "Invalid token"
                    });
                } else {
                    next();
                }
            })
        }else{
            console.log("token not found")
            res.json({
                message:"Access denied! unauthorized user"
            })
        }
    }
}