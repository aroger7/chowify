import actionTypes from './actionTypes';

export const addRecipe = recipe => ({
  type: actionTypes.ADD_RECIPE,
  recipe
});

export const deleteRecipe = id => ({
  type: actionTypes.DELETE_RECIPE,
  payload: {
    id
  }
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
  payload: {}
});

export const initRecipes = recipes => ({
  type: actionTypes.INIT_RECIPES,
  recipes
});

export const searchRecipeNames = search => ({
  type: actionTypes.SEARCH_RECIPE_NAMES,
  search
});

export const setAuthToken = token => ({
  type: actionTypes.SET_AUTH_TOKEN,
  payload: {
    token
  }
});

export const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: {
    user
  }
});

export const showModal = (modalType, modalProps) => ({
  type: actionTypes.SHOW_MODAL,
  payload: {
    modalType,
    modalProps
  }
});
