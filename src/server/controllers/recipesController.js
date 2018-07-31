const { ObjectID } = require('mongodb');
const pick = require('lodash.pick');

const { Recipe } = require('../models/recipe');

exports.recipesPost = (req, res) => {
  const body = pick(req.body, [
    'name',
    'description',
    'ingredients',
    'directions',
    'imageUrl'
  ]);

  const recipe = new Recipe(
    Object.assign(body, { _creator: req.user._id.toHexString() })
  );
  recipe
    .save()
    .then(doc => {
      res.status(200).send(recipe);
    })
    .catch(e => {
      res.status(400).send();
    });
};

exports.recipesDetailDelete = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Recipe.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then(recipe => {
    if (recipe) {
      res.send({ recipe });
    } else {
      res.status(404).send();
    }
  });
};

exports.recipesDetailGet = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Recipe.findById(id)
    .then(recipe => {
      if (recipe) {
        res.send(recipe);
      } else {
        res.status(404).send();
      }
    })
    .catch(e => res.status(400).send());
};

exports.recipesDetailPatch = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  const body = pick(req.body, [
    'name',
    'description',
    'ingredients',
    'directions',
    'imageUrl'
  ]);

  Recipe.findOneAndUpdate(
    {
      _id: id,
      _creator: req.user._id
    },
    { $set: body },
    { new: true }
  )
    .then(recipe => {
      if (recipe) {
        res.send({ recipe });
      } else {
        res.status(404).send();
      }
    })
    .catch(e => res.status(400).send());
};
