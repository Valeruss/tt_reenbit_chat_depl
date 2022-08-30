const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    lastUpdate: {
        type: Number,
        required: true,
    },
});

const Chats = mongoose.model('chats', chatsSchema, 'chats');

module.exports = Chats;
