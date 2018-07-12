import { connect } from 'react-redux';
import { viewRecipe } from 'actions';
import RecipeListCard from 'components/RecipeListCard';

const mapDispatchToProps = dispatch => ({
  viewRecipe: id => dispatch(viewRecipe(id))
});

export default connect(null, mapDispatchToProps)(RecipeListCard);
