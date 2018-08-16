import { connect } from 'react-redux';

import { hideModal } from 'actions';
import SignUpModal from 'components/SignUpModal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(SignUpModal);
