require('dotenv').config();
const jwt = require('../libraries/JWT');
const db = require('../libraries/Database');

module.exports = async (req, res, next) => {
    let token = req.headers.authorization || req.headers.Authorization;

    if (!token) {
        return res.status(401).json({
            "status": "Unauthorized",
            "message": "No token provided",
            "statusCode": 401
        });
    }

    // Expecting "Bearer <token>"
    token = token.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            "status": "Unauthorized",
            "message": "Malformed token",
            "statusCode": 401
        });
    }

    try {
        let { userId } = await jwt.verifyToken(token);
        const user = await db.query(`SELECT email FROM users WHERE userid = $1`, [userId]);

        if (user.rowCount > 0) {
            req.userId = userId;
            return next();
        }

        return res.status(400).json({
            "status": "Bad Request",
            "message": "User not found",
            "statusCode": 400
        });
    } catch (error) {
        console.error("JWT Error:", error);
        return res.status(401).json({
            "status": "Unauthorized",
            "message": "Invalid or expired token",
            "statusCode": 401
        });
    }
};
