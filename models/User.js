const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        personal_details: {
            type: Object,
            required: true
        },
        company_details: {
            type: Object,
            required: true
        },
        documents: {
            type: Object,
            required: true
        },
        previous_employer: {
            type: Object,
            required: false
        },
        family_nominee: {
            type: Object,
            required: true
        },
        temp: {
            type: Object,
            required: false
        },
        organization_id: {
            type: String,
            required: true
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