const express = require('express');

const recipesController = require('../controllers/recipesController');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

router.post('/', authenticate, recipesController.recipesPost);

module.exports = router;
