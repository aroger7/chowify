import actionTypes from "actions/actionTypes";

const initialState = {
	isAdding: false,
	isEditing: false,
	isViewing: false
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RECIPE:
			return Object.assign({}, state, { isAdding: false });
		case actionTypes.BEGIN_ADD_RECIPE:
			return Object.assign({}, state, { isAdding: true });
		case actionTypes.BEGIN_EDIT_RECIPE:
			return Object.assign({}, state, { isEditing: true });
		case actionTypes.CANCEL_ADD_RECIPE:
			return Object.assign({}, state, { isAdding: false });
		case actionTypes.END_EDIT_RECIPE:
			return Object.assign({}, state, { isEditing: false });
		default:
			return { ...state };
	}
};

export default app;
