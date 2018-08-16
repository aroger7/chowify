import { connect } from 'react-redux';

import { hideModal } from 'actions';
import LoginModal from 'components/LoginModal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(LoginModal);
