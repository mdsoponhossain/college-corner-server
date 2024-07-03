const mongoose = require('mongoose');

const collegeDataSchema = new mongoose.Schema({
    id: Number,
    college_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    event_number: {
        type: Number,
        required: true
    },

    research_number: {
        type: Number,
        required: true
    },
    admission_date: {
        type: String,
        required: true
    },
    ranking_details: {
        type: String,
        required: true
    },
    reviews_number: {
        type: Number,
        required: true
    },
    average_reviews: {
        type: Number,
        required: true
    },
    college_history: {
        type: String,
        required: true
    },
    events: {
        type: String,
        required: true
    },
    researches: {
        type: String,
        required: true
    }

}, { versionKey: false });

module.exports = collegeDataSchema ;