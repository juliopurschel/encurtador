const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    cutUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }    
});

mongoose.model('Url', UrlSchema);