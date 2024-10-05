const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get the token from Authorization header

    if (!token) return res.status(401).json({ status: false, error: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ status: false, error: 'Invalid token' });
        req.user = user;
        next();
    });
}

module.exports = authenticateJWT;
