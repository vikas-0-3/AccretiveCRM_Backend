const mongoose = require('mongoose');
const { Schema } = mongoose;

const navSchema = new Schema({
    module_name: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true
    },
    childrens: {
        type: Array,
    },
    moduleid: {
        type: String,
        required: true
    },
});

const Dashboard = mongoose.model('navmodules', navSchema);
module.exports = Dashboard;