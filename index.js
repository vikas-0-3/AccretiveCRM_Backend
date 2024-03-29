const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// AVAILABLE ROUTES

app.use('/api/auth', require('./routes/auth'))
app.use('/api/user/', require('./routes/user'))
app.use('/api/nav/', require('./routes/nav'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port || process.env.PORT}`)
})