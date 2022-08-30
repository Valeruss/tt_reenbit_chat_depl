const Router = require('express');
const messagesController = require('../controllers/messagesController');

const router = new Router();

router.get('/', messagesController.getAll);
router.get('/:chatID/last', messagesController.getLastByChatID);
router.get('/:chatID', messagesController.getAllByChatID);
router.post('/create', messagesController.create);

module.exports = router;
