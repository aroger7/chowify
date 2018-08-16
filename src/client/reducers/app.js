import actionTypes from 'actions/actionTypes';

const initialState = {
  authToken: null,
  currentUser: null
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_TOKEN:
      return Object.assign({}, state, { authToken: action.payload.token });
    case actionTypes.SET_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.payload.user });
    default:
      return { ...state };
  }
};

export default app;
