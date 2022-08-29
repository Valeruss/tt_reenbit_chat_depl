const Chats = require('../models/chats.js');

let chatControllerContainer;

class ChatsController {
    
    getAll = async (request, response) => {
        try {
            const chats = await Chats.find();
            return response.json(chats);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    };

    create = async (request, response, next) => {
        try {
            const { name, avatar } = request.body;
            const newChat = await Chats.create({ name, avatar });
            return response.json(newChat);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    };

    update = async (request, response, next) => {
        try {
            const { _id, lastUpdate } = request.body;
            const chat = await Chats.findOneAndUpdate({ _id }, { lastUpdate });
            return response.json(chat);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    };
}

const initChatController = () => {
    if (!chatControllerContainer) {
        chatControllerContainer = new ChatsController();
    }
    return chatControllerContainer;
};

module.exports = initChatController();