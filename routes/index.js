const router = require('express').Router();
const nameController = require('../controllers/names')

router.get('/', (req, res) =>{
    res.send(nameController.getMyName());
});

router.get('/sue', (req, res) =>{
    res.send(nameController.getSue());
});

module.exports = router;