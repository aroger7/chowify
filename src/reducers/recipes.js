import actionTypes from "actions/actionTypes";

const initialState = {
	all: [],
	creatingRecipe: null,
	currentPage: 0,
	itemsPerPage: 10,
	search: "",
	viewingRecipeId: null
};

const recipes = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RECIPE:
			action.recipe.id = state.all.length;
			return Object.assign({}, state, {
				all: state.all.concat(action.recipe),
				creatingRecipe: null,
				viewingRecipeId: action.recipe.id
			});
		case actionTypes.BEGIN_ADD_RECIPE:
			return Object.assign({}, state, {
				creatingRecipe: {
					id: state.all.length,
					name: "",
					description: "",
					directions: [],
					ingredients: []
				}
			});
		case actionTypes.CANCEL_ADD_RECIPE:
			return Object.assign({}, state, {
				creatingRecipe: null
			});
		case actionTypes.CHANGE_CREATING_RECIPE:
			return Object.assign({}, state, {
				creatingRecipe: action.recipe
			});
		case actionTypes.CHANGE_PAGE:
			return Object.assign({}, state, {
				currentPage: action.pageNum
			});
		case actionTypes.INIT_RECIPES:
			return Object.assign({}, state, {
				all: action.recipes,
				currentPage: 0
			});
		case actionTypes.SEARCH_RECIPE_NAMES:
			return Object.assign({}, state, {
				currentPage: 0,
				search: action.search
			});
		case actionTypes.VIEW_RECIPE:
			return Object.assign({}, state, {
				viewingRecipeId: action.id
			});
		default:
			return state;
	}
};

export default recipes;
