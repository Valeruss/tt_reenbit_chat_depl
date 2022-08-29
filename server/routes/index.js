const Router = require('express');
const chatsRouter = require('./chatsRouter');
const messagesRouter = require('./messagesRouter');

const router = new Router();

router.use('/chats', chatsRouter);
router.use('/messages', messagesRouter);

module.exports = router;
