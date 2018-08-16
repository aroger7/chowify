import { connect } from 'react-redux';

import { showModal } from 'actions';
import LoginSignUp from 'components/LoginSignUp';

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default connect(null, mapDispatchToProps)(LoginSignUp);
