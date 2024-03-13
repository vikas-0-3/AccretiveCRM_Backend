const express = require('express');
const router = express.Router()
const Nav = require('../models/Nav')



// Create navigation module
router.post('/creatnavigation', async (req, res) => {
        let success = false
       
        const { module_name, module_fields} = req.body;
        try {
            let nav = await Nav.find({ module_name: module_name });
            if(!nav) {
                return res.status(400).json({ success, error: "No Module found !" });
            }

            nav = await Nav.create({
                module_name: module_name,
                module_fields: module_fields
            });

            success = true;
            res.json({ success, nav })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }

    });



// get all navigation fields
router.get('/:module', async (req, res) => {
    let success = false
    let nav = await Nav.find({ module_name: req.params.module });
    if(!nav) {
        return res.status(400).json({ success, error: "No Module found !" });
    }
    success = true;
    res.json({ success, nav })
})


module.exports = router