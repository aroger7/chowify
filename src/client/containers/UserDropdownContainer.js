import { connect } from 'react-redux';

import UserDropdown from 'components/UserDropdown';

const mapStateToProps = state => ({
  currentUser: state.app.currentUser
});

export default connect(mapStateToProps)(UserDropdown);
