const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/vintflea?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo DB Successfully");
    })
}

module.exports = connectToMongo;