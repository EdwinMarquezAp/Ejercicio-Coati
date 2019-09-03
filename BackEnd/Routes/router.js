const express = require('express');
const router = express.Router();
/*  MIDDLEWARES   */
const jwt = require('../Middleware/jwt');
const auth = require('../Middleware/auth');
/*  CONTROLLERS   */
const homeController = require('../Controllers/homeController');
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');



router.get('/', homeController.login);

router.post('/', homeController.login_post);

router.get('/registrar', homeController.sign_in);

router.post('/registrar', homeController.sign_up);

router.get('/user', [jwt.isAuthenticated], userController.home);

router.get('/admin',[jwt.isAuthenticated], adminController.home);

router.post('/admin/crear/user/',[jwt.isAuthenticated], adminController.crear);

router.get('/admin/modificar/user/:id',[jwt.isAuthenticated], adminController.modificar);

router.post('/admin/modificar/user/:id',[jwt.isAuthenticated], adminController.modificar_action);

router.get('/admin/eliminar/user/:id',[jwt.isAuthenticated], adminController.eliminar);

module.exports = router;