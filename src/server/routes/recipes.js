const express = require('express');

const recipesController = require('../controllers/recipesController');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

router
  .route('/')
  .get(recipesController.recipesGet)
  .post(authenticate, recipesController.recipesPost);

router
  .route('/:id')
  .get(recipesController.recipesDetailGet)
  .delete(authenticate, recipesController.recipesDetailDelete)
  .patch(authenticate, recipesController.recipesDetailPatch);

module.exports = router;
