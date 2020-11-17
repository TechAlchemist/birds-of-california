const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const randomWords = require('random-words');


const checklistSchema = new Schema(

    {
        listTitle: {
            type: String,
            default: function() {
                return randomWords(3).join('');
            }
        },
        belongsTo: {
            type: String,
            required: true
        },
        birdIds: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('checklists', checklistSchema);