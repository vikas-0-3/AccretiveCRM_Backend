const mongoose = require('mongoose');
require('dotenv').config()
// const mongoURI = "mongodb+srv://vintflea:vintflea03@vintflea.vm2zirj.mongodb.net/vintflea?retryWrites=true&w=majority";
const mongoURI = "mongodb://localhost:27017/vintflea?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo DB Successfully");
    })
}

module.exports = connectToMongo;