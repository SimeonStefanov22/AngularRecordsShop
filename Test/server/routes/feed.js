const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/games', feedController.getRecords);
router.post('/game/create', feedController.createRecord);
router.delete('/games/:id', feedController.deleteRecord);
router.put('/games/:id', feedController.updateRecord);
router.get('/games/:id', feedController.getOneRecord);
router.get('/users', feedController.getUsers);
router.get('/users/:id', feedController.getOneUser);
router.delete('/users/:id', feedController.deleteUser);


module.exports = router;
