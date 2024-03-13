const mongoose = require('mongoose');
const { Schema } = mongoose;

const navSchema = new Schema({
    module_name: {
        type: String,
        required: true,
        unique: true
    },
    module_fields: {
        type: Array,
        required: true,
    }
});

const Nav = mongoose.model('nav', navSchema);
module.exports = Nav;