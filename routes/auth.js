const express = require('express');
const Auth = require('../models/Auth');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const md5 = require('md5');


// LOGIN ROUTE
router.post('/login',
    [body('username', "Enter a vald Email Id").isEmail(),
    body('password', "Password cannot be blank").exists()
    ],
    async (req, res) => {
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;
        try {
            let user = await Auth.findOne({ username });
            if (!user) {
                return res.status(400).json({ success, error: "user not found !" });
            }
            const passwordCompare = md5(password) == user.password ? true : false;
            if (!passwordCompare) {
                return res.status(400).json({ success, error: "Incorrect Password !" });
            }

            success = true;
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