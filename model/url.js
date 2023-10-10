const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortID: {
        type: String,  // Corrected the type value from 'string' to 'String'
        unique: true,
        required: true,
    },
    redirectURL: {
        type: String,  // Corrected the type value from 'string' to 'String'
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: String,  // Corrected the type value from 'string' to 'String'
        }
    }]
}, { timestamps: true });

const URL = mongoose.model('url', UrlSchema);
module.exports = URL;  // Corrected the spelling of 'module.exports'
