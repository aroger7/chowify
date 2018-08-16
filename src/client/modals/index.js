import LoginModalContainer from 'containers/LoginModalContainer';
import SignUpModalContainer from 'containers/SignUpModalContainer';

export const modalComponents = {
  LOGIN: LoginModalContainer,
  SIGN_UP: SignUpModalContainer
};

export const modalTypes = {};
Object.keys(modalComponents).forEach(key => (modalTypes[key] = key));

Object.freeze(modalComponents);
Object.freeze(modalTypes);
