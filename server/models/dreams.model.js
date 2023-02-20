const mongoose = require('mongoose');
const DreamSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [ true, 
            "Title is required"]
    },
    plot: { 
        type: String,
        minLength:[ 3, "Plot must be at least three characters long" ],
        required:[ true,
        "Plot is required"]
    },
    setting: {
        type: String,
        minLength: [2, "Setting must be at least two characters long"],
        required: [true, "Setting is required, or type 'don't remember'"]
    },
    peopleInvolved: {
        type: String,
        required: [true, "Must list people featured in dream"]
    },
    otherDetails: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Dream', DreamSchema);