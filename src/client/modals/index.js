import AddRecipeModalContainer from 'containers/AddRecipeModalContainer';
import RecipeModalContainer from 'containers/RecipeModalContainer';

export const modalComponents = {
  ADD_RECIPE: AddRecipeModalContainer,
  RECIPE: RecipeModalContainer
};

export const modalTypes = {};
Object.keys(modalComponents).forEach(key => (modalTypes[key] = key));

Object.freeze(modalComponents);
Object.freeze(modalTypes);
