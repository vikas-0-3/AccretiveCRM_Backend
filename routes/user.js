const express = require('express');
const router = express.Router()
const User = require('../models/User')
// const { body, validationResult } = require('express-validator');



// Create user Route
router.post('/createuser',
    // [body('first_name', "Enter a vald first name").isLength({ min: 3 }),
    // body('last_name', "Enter a vald last name").isLength({ min: 3 }),
    // body('email', "Enter a vald Email Id").isEmail(),
    // body('phone', "Enter a vald Phone number").isLength({ min: 10, max: 10 }),
    // ],
    async (req, res) => {
        let success = false
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const { personal_details, company_details, documents, previous_employer, family_nominee, temp, organization_id } = req.body;
        var useremail = personal_details.email;
        try {
            let user = await User.findOne({ useremail });
            if (user) {
                return res.status(400).json({ success, error: "user already Exist !" });
            }

            user = await User.create({
                personal_details: personal_details,
                company_details: company_details,
                documents: documents,
                previous_employer: previous_employer,
                family_nominee: family_nominee,
                temp: temp,
                organization_id: organization_id
            });

            success = true;
            res.json({ success, user })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }

    });


router.get('/', async (req, res) => {
    let success = false
    let users = await User.find();
    if(!users) {
        return res.status(400).json({ success, error: "No User found !" });
    }
    success = true;
    res.json({ success, users })
})


module.exports = router