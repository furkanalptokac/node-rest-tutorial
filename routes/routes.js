const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/', controller.getIndex);

router.get('/kullanici', controller.getUser);

module.exports = router;
