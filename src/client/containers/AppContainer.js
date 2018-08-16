import { connect } from 'react-redux';

import { setAuthToken, setCurrentUser, showModal } from 'actions';
import App from 'components/App';

const mapDispatchToProps = dispatch => ({
  setAuthToken: token => dispatch(setAuthToken(token)),
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

const mapStateToProps = state => ({
  authToken: state.app.authToken,
  currentUser: state.app.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
