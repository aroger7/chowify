import { connect } from 'react-redux';

import { setAuthToken, setCurrentUser } from 'actions';
import UserDropdown from 'components/UserDropdown';

const mapDispatchToProps = dispatch => ({
  setAuthToken: token => dispatch(setAuthToken(token)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
  authToken: state.app.authToken,
  currentUser: state.app.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
