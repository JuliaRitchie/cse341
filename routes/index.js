const router = require('express').Router();
const nameController = require('../controllers/names');
// // const userController = require('../controllers/user');

router.use('/contacts', require('./contacts'))
router.get('/', (req, res) =>{
    res.send(nameController.getMyName());
});

router.use('/', require('./swagger'));

router.get('/sue', (req, res) =>{
    res.send(nameController.getSue());
});

// router.get('/', userController.getUser);
// router.get('/username', userController.getUsername);

module.exports = router;