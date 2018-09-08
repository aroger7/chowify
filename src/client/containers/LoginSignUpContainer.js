import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { showModal } from 'actions';
import LoginSignUp from 'components/LoginSignUp';

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginSignUp));
