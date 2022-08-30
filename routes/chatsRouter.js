const Router = require('express');
const chatsController = require('../controllers/chatsController');

const router = new Router();

router.get('/', chatsController.getAll);
router.post('/', chatsController.create);
router.post('/update', chatsController.update);

module.exports = router;