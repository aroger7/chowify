import { connect } from 'react-redux';

import { hideModal } from 'actions';
import SignUpForm from 'components/SignUpForm';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
