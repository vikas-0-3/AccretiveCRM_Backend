const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Dashboard = require('../models/Dashboard');


router.get('/navlist', async (req, res) => {

    let navlistdata = await Dashboard.find();

    res.json(navlistdata);
})


module.exports = router