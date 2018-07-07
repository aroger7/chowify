import actionTypes from "actions/actionTypes";

const initialState = {
	all: [],
	currentPage: 0,
	editingRecipe: null,
	itemsPerPage: 10,
	search: "",
	viewingRecipeId: null
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
		case actionTypes.ADD_DIRECTION:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									directions: recipe.directions.concat(
										action.payload.direction
									)
							  })
							: recipe
				)
			});
		case actionTypes.ADD_INGREDIENT:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									ingredients: recipe.ingredients.concat(
										action.payload.ingredient
									)
							  })
							: recipe
				)
			});
		case actionTypes.ADD_RECIPE:
			return Object.assign({}, state, {
				all: state.all.concat(action.recipe),
				creatingRecipe: null,
				viewingRecipeId: action.recipe.id
			});
		case actionTypes.BEGIN_EDIT_RECIPE:
			return Object.assign({}, state, {
				editingRecipe: Object.assign()
			});
		case actionTypes.CHANGE_CREATING_RECIPE:
			return Object.assign({}, state, {
				creatingRecipe: action.recipe
			});
		case actionTypes.CHANGE_DIRECTION:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									directions: recipe.directions.map(
										(direction, index) =>
											index === action.payload.directionId
												? action.payload.newDirection
												: direction
									)
							  })
							: recipe
				)
			});
		case actionTypes.CHANGE_INGREDIENT:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									ingredients: recipe.ingredients.map(
										(ingredient, index) =>
											index ===
											action.payload.ingredientId
												? action.payload.newIngredient
												: ingredient
									)
							  })
							: recipe
				)
			});
		case actionTypes.CHANGE_PAGE:
			return Object.assign({}, state, {
				currentPage: action.pageNum
			});
		case actionTypes.CHANGE_RECIPE_DESCRIPTION:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									description: action.payload.description
							  })
							: recipe
				)
			});
		case actionTypes.CHANGE_RECIPE_NAME:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									name: action.payload.name
							  })
							: recipe
				)
			});
		case actionTypes.DELETE_DIRECTION:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									directions: recipe.directions.filter(
										(direction, index) =>
											index !== action.payload.directionId
									)
							  })
							: recipe
				)
			});
		case actionTypes.DELETE_INGREDIENT:
			return Object.assign({}, state, {
				all: state.all.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									ingredients: recipe.ingredients.filter(
										(ingredient, index) =>
											index !==
											action.payload.ingredientId
									)
							  })
							: recipe
				)
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
		case actionTypes.MOVE_DIRECTION_DOWN:
			return Object.assign({}, state, {
				all: state.map(
					recipe =>
						recipe.id === action.payload.recipeId
							? Object.assign({}, recipe, {
									directions:
										action.payload.directionId <
										recipe.directions.length - 1
											? [
													...recipe.directions.slice(
														0,
														action.payload
															.directionId
													),
													recipe.directions[
														action.payload
															.directionId + 1
													],
													recipe.directions[
														action.payload
															.directionId
													],
													...recipe.directions.slice(
														action.payload
															.directionId + 2
													)
											  ]
											: recipe.directions
							  })
							: recipe
				)
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
			return { ...state };
	}
};

export default recipes;
