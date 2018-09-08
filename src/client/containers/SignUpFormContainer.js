import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hideModal } from 'actions';
import SignUpForm from 'components/SignUpForm';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

const mapStateToProps = state => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);
