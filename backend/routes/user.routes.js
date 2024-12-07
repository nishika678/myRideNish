const express = require('express');
const router=express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be a 3 character or longer'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be a 3 character or longer'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long')
],
    userController.loginUser
)

module.exports = router;