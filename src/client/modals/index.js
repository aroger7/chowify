import AddRecipeModalContainer from 'containers/AddRecipeModalContainer';
import LoginModalContainer from 'containers/LoginModalContainer';
import SignUpModalContainer from 'containers/SignUpModalContainer';

export const modalComponents = {
  ADD_RECIPE: AddRecipeModalContainer,
  LOGIN: LoginModalContainer,
  SIGN_UP: SignUpModalContainer
};

export const modalTypes = {};
Object.keys(modalComponents).forEach(key => (modalTypes[key] = key));

Object.freeze(modalComponents);
Object.freeze(modalTypes);
