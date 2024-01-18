const router = require('express').Router();
// const nameController = require('../controllers/names')
const userController = require('../controllers/user');

// router.get('/', (req, res) =>{
//     res.send(nameController.getMyName());
// });

// router.get('/sue', (req, res) =>{
//     res.send(nameController.getSue());
// });

router.get('/', userController.getUser);
router.get('/username', userController.getUsername);

module.exports = router;