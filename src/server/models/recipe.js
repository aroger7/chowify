const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  description: {
    type: String,
    required: false,
    minlength: 1
  },
  ingredients: {
    type: [
      {
        type: String,
        minlength: 1,
        trim: true
      }
    ]
  },
  directions: {
    type: [
      {
        type: String,
        minlength: 1,
        trim: true
      }
    ]
  },
  imageUrl: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 2000
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe };
