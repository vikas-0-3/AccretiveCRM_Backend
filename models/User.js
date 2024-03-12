const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        last_login: {
            type: Date,
            required: false
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

// userSchema.pre('save', function (next) {
//     this.updated_at = Date.now();
//     next();
// });

const User = mongoose.model('user', userSchema);
module.exports = User;