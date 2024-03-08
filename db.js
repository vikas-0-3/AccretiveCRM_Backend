const mongoose = require('mongoose');
require('dotenv').config()
// const mongoURI = "mongodb://localhost:27017/vintflea?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://vg1231923:accretive03@accretive.khho8mv.mongodb.net/ACCRETIVECRM?retryWrites=true&w=majority&appName=Accretive";


const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo DB connected Successfully')
    }
    catch {
        console.log(error)
    }
}

module.exports = connectToMongo;