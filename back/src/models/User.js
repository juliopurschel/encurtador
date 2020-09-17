const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }    
});

mongoose.model('User', UserSchema);