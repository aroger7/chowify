import actionTypes from 'actions/actionTypes';

const initialState = {
  all: [],
  nextCursor: null,
  search: ''
};

const recipes = (state = initialState, action) => {
  if (action && action.payload) {
    console.log(
      `${action.type} action dispatched with payload`,
      action.payload
    );
  } else {
    console.log(`${action.type} action dispatched`);
  }
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      return Object.assign({}, state, {
        all: state.all.concat(action.recipe),
        creatingRecipe: null,
        viewingRecipeId: action.recipe.id
      });
    case actionTypes.DELETE_RECIPE:
      return Object.assign({}, state, {
        all: state.all.filter(recipe => recipe.id !== action.payload.id)
      });
    case actionTypes.INIT_RECIPES:
      return Object.assign({}, state, {
        all: action.recipes,
        currentPage: 0
      });
    case actionTypes.SET_ALL_RECIPES: {
      return Object.assign({}, state, {
        all: action.payload.recipes,
        nextCursor: action.payload.next
      });
    }
    case actionTypes.SEARCH_RECIPE_NAMES:
      return Object.assign({}, state, {
        currentPage: 0,
        search: action.search
      });
    default:
      return { ...state };
  }
};

export default recipes;
