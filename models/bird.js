const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birdSchema = new Schema(
    {
        commonName: String,
        latinName: String,
        family: String,
        order: String,
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('all-birds', birdSchema);