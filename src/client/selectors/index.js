import { createSelector } from "reselect";

const selectAll = state => state.recipes.all;
const selectCurrentPage = state => state.recipes.currentPage;
const selectItemsPerPage = state => state.recipes.itemsPerPage;
const selectSearchName = state => state.recipes.search;
const selectViewingRecipeId = state => state.recipes.viewingRecipeId;

export const getFilteredRecipes = createSelector(
	[selectAll, selectSearchName],
	(all, searchName) =>
		searchName
			? all.filter(recipe => recipe.name.startsWith(searchName))
			: all
);

export const getFilteredRecipesByPage = createSelector(
	[getFilteredRecipes, selectItemsPerPage],
	(filteredRecipes, itemsPerPage) => {
		return filteredRecipes.reduce((acc, curr, currIndex) => {
			if (currIndex % itemsPerPage === 0) {
				acc.push([]);
			}

			acc[acc.length - 1].push(curr);
			return acc;
		}, []);
	}
);

export const getFilteredRecipesOnPage = createSelector(
	[getFilteredRecipesByPage, selectCurrentPage],
	(filteredRecipesByPage, currentPage) => {
		return currentPage < filteredRecipesByPage.length
			? filteredRecipesByPage[currentPage]
			: [];
	}
);

export const getNumPages = createSelector(
	[getFilteredRecipesByPage],
	filteredRecipesByPage => filteredRecipesByPage.length
);

export const getViewingRecipe = createSelector(
	[selectAll, selectViewingRecipeId],
	(all, viewingRecipeId) => all.find(recipe => recipe.id === viewingRecipeId)
);
