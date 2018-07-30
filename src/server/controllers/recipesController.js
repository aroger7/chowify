const { Recipe } = require('../models/recipe');

exports.recipesPost = (req, res) => {
  const { name, description, ingredients, directions, imageUrl } = req.body;
  const recipe = new Recipe({
    name,
    description,
    ingredients,
    directions,
    imageUrl,
    _creator: req.user._id.toHexString()
  });
  recipe
    .save()
    .then(doc => {
      res.status(200).send(recipe);
    })
    .catch(e => {
      res.status(400).send();
    });
};
