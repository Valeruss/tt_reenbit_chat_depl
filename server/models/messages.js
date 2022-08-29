const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    chatID: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
});

const Messages = mongoose.model('messages', messagesSchema, 'messages');

module.exports = Messages;
