const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        email: {
            type: String,
            lowercase: true
        },
        password: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);