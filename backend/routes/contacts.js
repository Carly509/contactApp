var express = require('express');
const router = express.Router();

var contact_controller = require('../controllers/contactController');

router.post('/create', contact_controller.contact_create);

router.get('/delete/:id', contact_controller.contact_delete);

router.post('/edit/:id', contact_controller.contact_update);

router.get('/:id',contact_controller.contact_details);

router.route('/').get(contact_controller.contact_list);

module.exports = router;