import { combineReducers } from 'redux';
import app from './app';
import recipes from './recipes';

export default combineReducers({
  app,
  recipes
});
