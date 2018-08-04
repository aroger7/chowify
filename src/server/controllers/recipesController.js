const { ObjectID } = require('mongodb');
const pick = require('lodash.pick');

const { Recipe } = require('../models/recipe');

const LIMIT_DEFAULT = 50;
const LIMIT_MAX = 100;

exports.recipesGet = (req, res) => {
  const { limit, next, name } = req.query;
  const [nextId, nextName] = next ? decodeURI(next).split('_') : '';
  let limitNumber = LIMIT_DEFAULT;
  if (limit) {
    limitNumber = Number(limit);
    if (
      !Number.isInteger(limitNumber) ||
      limitNumber > LIMIT_MAX ||
      limitNumber === 0
    ) {
      res
        .status(400)
        .send({ error: `Invalid limit, max value is ${LIMIT_MAX}` });
    }
  }
  if (nextId && !ObjectID.isValid(nextId)) {
    res.status(400).send({ error: 'Next value is not a valid ID' });
  }

  const query = {
    ...(next && {
      $or: [
        { name: { $gt: nextName } },
        {
          name: nextName,
          _id: { $lte: nextId }
        }
      ]
    }),
    ...(name && { name: { $regex: new RegExp(`.*${name}.*`, 'i') } })
  };

  Recipe.find(query)
    .sort({
      name: 1,
      _id: -1
    })
    .limit(limitNumber + 1)
    .then(recipes => {
      const nextRecipe =
        recipes.length === limitNumber + 1 ? recipes.pop() : null;

      res.status(200).send({
        count: recipes.length,
        recipes: recipes.map(
          ({ _id, _creator, name, description, imageUrl }) => ({
            _id,
            _creator,
            name,
            description,
            imageUrl
          })
        ),
        next: nextRecipe
          ? encodeURI(`${nextRecipe._id}_${nextRecipe.name}`)
          : null
      });
    })
    .catch(e => res.status(400).send(e));
};

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
