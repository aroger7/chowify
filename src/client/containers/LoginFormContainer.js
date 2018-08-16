import { connect } from 'react-redux';

import { setAuthToken, setCurrentUser } from 'actions';
import LoginForm from 'components/LoginForm';

const mapDispatchToProps = dispatch => ({
  setAuthToken: token => dispatch(setAuthToken(token)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
