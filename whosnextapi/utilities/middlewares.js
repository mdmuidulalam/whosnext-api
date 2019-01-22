var config = require('../config');
var jwtConfig = require('../utilities/auth');

class jwtMW {
    constructor(){ }

    verifyJWT_MW(req, res, next)
    {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        console.log(token);

        new jwtConfig().verifyJWTToken(token).then((decodedToken) => {
            req.user = decodedToken.data
            next()
        }).catch((err) => {
            res.status(400).json({message: "Invalid auth token provided."})
        });
    }
}

module.exports = jwtMW;
