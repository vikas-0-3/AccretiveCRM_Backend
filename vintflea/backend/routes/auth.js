const express = require('express');
const Auth = require('../models/Auth');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const md5 = require('md5');
// Create a user using : POST "/api/auth/createUser"
router.post('/createUser', [
    body('user_name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email Address').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        let user = await Auth.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User already exist with this email !" })
        }
        user = await Auth.create({
            user_type: req.body.user_type,
            user_name: req.body.user_name,
            email: req.body.email,
            password: md5(req.body.password),
            phone: req.body.phone
        })
    
        success=true;
        res.json({ success, user })
    }
    catch(error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured");
    }



})


// LOGIN ROUTE

router.post('/login',
    [body('email', "Enter a vald Email Id").isEmail(),
    body('password', "Password cannot be blank").exists()
    ],
    async (req, res) => {
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await Auth.findOne({ email });
            if (!user) {
                return res.status(400).json({success, error: "Please try to login with correct email" });
            }
            const passwordCompare = md5(password) == user.password ? true : false;
            if (!passwordCompare) {
                return res.status(400).json({ success, error: "Please try to login with correct credentials" });
            }

            success=true;
            res.json({ success, user })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }

    });


router.get('/', (req, res) => {
    console.log(req.body);
    res.json({})
})


module.exports = router