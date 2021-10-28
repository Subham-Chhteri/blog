const mongoose = require('mongoose');


const trackerSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required:true
    },
    text: {
        type: String,
        trim:true
    }
});


const Tracker = mongoose.model( 'Tracker', trackerSchema);

module.exports = Tracker;