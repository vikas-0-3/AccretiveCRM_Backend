const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    user_type: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: Array,
        required: false
    },
});

const Auth = mongoose.model('auth', authSchema);
module.exports = Auth;