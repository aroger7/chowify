import { connect } from 'react-redux';

import { hideModal } from 'actions';
import RecipeModal from 'components/RecipeModal';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(RecipeModal);
