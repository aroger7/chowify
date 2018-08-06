const express = require('express');

const { User } = require('./../models/user');
const usersController = require('../controllers/usersController');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

router.post('/', usersController.usersPost);

router.post('/login', usersController.usersLoginPost);

router.get('/current', authenticate, usersController.usersCurrentGet);

router.post(
  '/current/changePassword',
  authenticate,
  usersController.usersCurrentChangePasswordPost
);

router.get(
  '/current/recipes',
  authenticate,
  usersController.usersCurrentRecipesGet
);

router.delete(
  '/current/token',
  authenticate,
  usersController.usersCurrentTokenDelete
);

module.exports = router;
