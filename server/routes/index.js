const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const productController = require('../controllers/product-controller');
const { body } = require('express-validator');
const AuthMiddleware = require('../middleware/auth-middleware');
const multer = require('multer');
const bannerService = require('../services/banner-service');
const bannerController = require('../controllers/banner-controller');
const upload = multer();
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.post(
  '/upload',
  AuthMiddleware,
  upload.single('file'),
  productController.imgUpload
);
router.post('/create', AuthMiddleware, productController.create);
router.post('/delete', AuthMiddleware, productController.delete);
router.post('/edit', AuthMiddleware, productController.edit);
router.get('/all', productController.getAll);
router.post('/banner/create', AuthMiddleware, bannerController.create);
router.post('/banner/delete', AuthMiddleware, bannerController.delete);
router.get('/banner/all', bannerController.getAll);
router.get('/byCategories', productController.getByCategories);
router.get('/allCategories', productController.getCategories);
router.get('/allSubCategories', productController.getSubcategories);

module.exports = router;
