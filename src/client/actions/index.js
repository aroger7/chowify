import actionTypes from './actionTypes';

export const addDirection = (recipeId, direction) => ({
  type: actionTypes.ADD_DIRECTION,
  payload: {
    direction,
    recipeId
  }
});

export const addIngredient = (recipeId, ingredient) => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: {
    ingredient,
    recipeId
  }
});

export const addRecipe = recipe => ({
  type: actionTypes.ADD_RECIPE,
  recipe
});

export const beginAddRecipe = () => ({
  type: actionTypes.BEGIN_ADD_RECIPE
});

export const beginEditRecipe = () => ({
  type: actionTypes.BEGIN_EDIT_RECIPE
});

export const cancelAddRecipe = () => ({
  type: actionTypes.CANCEL_ADD_RECIPE
});

export const changeCreatingRecipe = recipe => ({
  type: actionTypes.CHANGE_CREATING_RECIPE,
  recipe
});

export const changeDirection = (recipeId, directionId, newDirection) => ({
  type: actionTypes.CHANGE_DIRECTION,
  payload: {
    directionId,
    newDirection,
    recipeId
  }
});

export const changeIngredient = (recipeId, ingredientId, newIngredient) => ({
  type: actionTypes.CHANGE_INGREDIENT,
  payload: {
    ingredientId,
    newIngredient,
    recipeId
  }
});

export const changePage = pageNum => ({
  type: actionTypes.CHANGE_PAGE,
  pageNum
});

export const changeRecipeDescription = (recipeId, description) => ({
  type: actionTypes.CHANGE_RECIPE_DESCRIPTION,
  payload: {
    description,
    recipeId
  }
});

export const changeRecipeName = (recipeId, name) => ({
  type: actionTypes.CHANGE_RECIPE_NAME,
  payload: {
    name,
    recipeId
  }
});

export const deleteDirection = (recipeId, directionId) => ({
  type: actionTypes.DELETE_DIRECTION,
  payload: {
    directionId,
    recipeId
  }
});

export const deleteIngredient = (recipeId, ingredientId) => ({
  type: actionTypes.DELETE_INGREDIENT,
  payload: {
    ingredientId,
    recipeId
  }
});

export const deleteRecipe = id => ({
  type: actionTypes.DELETE_RECIPE,
  payload: {
    id
  }
});

export const initRecipes = recipes => ({
  type: actionTypes.INIT_RECIPES,
  recipes
});

export const moveDirectionDown = (recipeId, directionId) => ({
  type: actionTypes.MOVE_DIRECTION_DOWN,
  payload: {
    directionId,
    recipeId
  }
});

export const moveDirectionUp = (recipeId, directionId) => ({
  type: actionTypes.MOVE_DIRECTION_UP,
  payload: {
    directionId,
    recipeId
  }
});

export const moveIngredientDown = (recipeId, ingredientId) => ({
  type: actionTypes.MOVE_INGREDIENT_DOWN,
  payload: {
    ingredientId,
    recipeId
  }
});

export const moveIngredientUp = (recipeId, ingredientId) => ({
  type: actionTypes.MOVE_INGREDIENT_UP,
  payload: {
    ingredientId,
    recipeId
  }
});

export const searchRecipeNames = search => ({
  type: actionTypes.SEARCH_RECIPE_NAMES,
  search
});

export const viewRecipe = id => ({
  type: actionTypes.VIEW_RECIPE,
  id
});
