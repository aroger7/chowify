import { connect } from 'react-redux';

import { showModal } from 'actions';
import RecipeListCard from 'components/RecipeListCard';

const mapDispatchToProps = dispatch => ({
  showModal: (modalType, modalProps) =>
    dispatch(showModal(modalType, modalProps))
});

export default connect(null, mapDispatchToProps)(RecipeListCard);
