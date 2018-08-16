import { connect } from 'react-redux';

import { showModal } from 'actions';
import AddRecipeButton from 'components/AddRecipeButton';

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default connect(null, mapDispatchToProps)(AddRecipeButton);
