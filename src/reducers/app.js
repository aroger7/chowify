import actionTypes from "actions/actionTypes";

const initialState = {
	isAdding: false,
	isViewing: false
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RECIPE:
			return Object.assign({}, state, { isAdding: false });
		case actionTypes.BEGIN_ADD_RECIPE:
			return Object.assign({}, state, { isAdding: true });
		case actionTypes.CANCEL_ADD_RECIPE:
			return Object.assign({}, state, { isAdding: false });
		default:
			return state;
	}
};

export default app;
