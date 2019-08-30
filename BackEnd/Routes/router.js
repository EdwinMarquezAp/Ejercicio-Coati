const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/homeController');
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');

router.get('/', homeController.login);

router.post('/', homeController.login_post);

router.get('/registrar', homeController.sign_in);

router.post('/registrar', homeController.sign_up);

router.get('/user', userController.home);

router.get('/admin', adminController.home);

router.post('/admin/crear/user/', adminController.crear);

router.get('/admin/modificar/user/:id', adminController.modificar);

router.post('/admin/modificar/user/:id', adminController.modificar_action);

router.get('/admin/eliminar/user/:id', adminController.eliminar);

module.exports = router;