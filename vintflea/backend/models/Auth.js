const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    user_type: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});

const Auth = mongoose.model('auth', authSchema);
module.exports = Auth;