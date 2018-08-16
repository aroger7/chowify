import { combineReducers } from 'redux';
import app from './app';
import recipes from './recipes';
import modals from './modals';

export default combineReducers({
  app,
  modals,
  recipes
});
