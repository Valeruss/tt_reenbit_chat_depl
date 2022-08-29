const _ = require('lodash');
const Messages = require('../models/messages.js');

let messagesConrollerContainer;

class MessagesController {
    getAll = async (request, response) => {
        try {
            const messages = await Messages.find();
            return response.json(messages);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    };

    getLastByChatID = async (request, response) => {
        try {
            const { chatID } = request.params;
            const messages = await Messages.find({ chatID });

            const lastMessage = messages[messages.length - 1];
            return response.json(lastMessage);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    }

    getAllByChatID = async (request, response) => {
        try {
            const { chatID } = request.params;
            const messages = await Messages.find({ chatID });
            return response.json(messages);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    }

    create = async (request, response, next) => {
        try {
            const { chatID, message, sender, date } = request.body;
            const newMessage = await Messages.create({ chatID, message, sender, date });
            return response.json(newMessage);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    };
}

const initMessagesController = () => {
    if (!messagesConrollerContainer) {
        messagesConrollerContainer = new MessagesController();
    }
    return messagesConrollerContainer;
};

module.exports = initMessagesController();
