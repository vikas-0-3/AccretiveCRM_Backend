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
app.use('/api/dashboard/', require('./routes/dashboard'))
app.use('/api/products', require('./routes/products'))
app.use('/api/productgold', require('./routes/productgold'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port || process.env.PORT}`)
})