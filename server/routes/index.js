const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const productController = require('../controllers/product-controller');
const { body } = require('express-validator');
const AuthMiddleware = require('../middleware/auth-middleware');
const multer = require('multer');
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
router.delete('/delete', AuthMiddleware, productController.delete);
router.post('/edit', AuthMiddleware, productController.edit);
router.get('/all', productController.getAll);
router.get('/byCategories', productController.getByCategories);
// router.post(
//   '/todo/create',
//   AuthMiddleware,
//   body('title').isString(),
//   body('content').isString(),
//   body('author').isString(),
//   body('date').isString(),
//   body('category').isString(),
//   body('completed').isBoolean(),
//   todoController.create
// );
// router.post('/todo/edit', AuthMiddleware, todoController.edit);
// router.post(
//   '/todo/delete',
//   AuthMiddleware,
//   body('id').isString(),
//   todoController.delete
// );
module.exports = router;
