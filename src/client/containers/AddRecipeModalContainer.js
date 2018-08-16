import { connect } from 'react-redux';

import { showModal, hideModal } from 'actions';
import AddRecipeModal from 'components/AddRecipeModal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalTypes, modalProps) =>
    dispatch(showModal(modalTypes, modalProps))
});

export default connect(null, mapDispatchToProps)(AddRecipeModal);
