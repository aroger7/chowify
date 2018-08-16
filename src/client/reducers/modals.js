import actionTypes from 'actions/actionTypes';

const initialState = {
  modalType: null,
  modalProps: {}
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      });
    case actionTypes.HIDE_MODAL:
      return initialState;
    default:
      return initialState;
  }
};

export default modals;
