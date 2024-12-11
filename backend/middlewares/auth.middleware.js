const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// module.exports.authUser = async (req, res, next) => {
//     const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }


//     const isBlacklisted = await blackListTokenModel.findOne({ token: token });

//     if (isBlacklisted) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await userModel.findById(decoded._id)

//         req.user = user;

//         return next();

//     } catch (err) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     }
// }

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    console.log('Received token:', token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const isBlacklisted = await blackListTokenModel.findOne({ token: token });
        console.log('Is blacklisted:', isBlacklisted);

        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        
        const user = await userModel.findById(decoded._id);
        console.log('Found user:', user);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        return next();

    } catch (err) {
        console.log('Auth error:', err);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}