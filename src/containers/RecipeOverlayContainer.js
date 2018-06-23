import { connect } from "react-redux";
import { viewRecipe } from "actions";
import { getViewingRecipe } from "selectors";
import RecipeOverlay from "components/RecipeOverlay";

const mapDispatchToProps = dispatch => ({
	viewRecipe: id => dispatch(viewRecipe(id))
});

const mapStateToProps = state => ({
	recipe: getViewingRecipe(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeOverlay);
