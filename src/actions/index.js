import actionTypes from "./actionTypes";

export const addRecipe = recipe => ({
	type: actionTypes.ADD_RECIPE,
	recipe: recipe
});

export const beginAddRecipe = () => ({
	type: actionTypes.BEGIN_ADD_RECIPE
});

export const cancelAddRecipe = () => ({
	type: actionTypes.CANCEL_ADD_RECIPE
});

export const changeCreatingRecipe = recipe => ({
	type: actionTypes.CHANGE_CREATING_RECIPE,
	recipe: recipe
});

export const changePage = pageNum => ({
	type: actionTypes.CHANGE_PAGE,
	pageNum: pageNum
});

export const deleteRecipe = id => ({
	type: actionTypes.DELETE_RECIPE,
	id: id
});

export const initRecipes = recipes => ({
	type: actionTypes.INIT_RECIPES,
	recipes: recipes
});

export const searchRecipeNames = search => ({
	type: actionTypes.SEARCH_RECIPE_NAMES,
	search: search
});

export const viewRecipe = id => ({
	type: actionTypes.VIEW_RECIPE,
	id: id
});
