const express = require('express');
const router = express.Router();

var user_controller = require('../controllers/userController');

router.post('/create', user_controller.user_create);

router.get('/:id/delete', user_controller.user_delete);

router.post('/:id/update', user_controller.user_update);

//router.get('/contact/:id',contact_controller.contact_details);


module.exports = router;