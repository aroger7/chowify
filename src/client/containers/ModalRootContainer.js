import { connect } from 'react-redux';

import ModalRoot from 'components/ModalRoot';

const mapStateToProps = state => state.modals;

export default connect(mapStateToProps)(ModalRoot);
