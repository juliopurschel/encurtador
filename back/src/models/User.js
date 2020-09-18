const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true
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