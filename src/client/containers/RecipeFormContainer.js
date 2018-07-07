import { connect } from "react-redux";
import {
	beginEditRecipe,
	changeRecipeDescription,
	changeRecipeName,
	endEditRecipe,
	viewRecipe
} from "actions";
import { getViewingRecipe } from "selectors";
import RecipeForm from "components/RecipeForm";

const mapStateToProps = state => ({
	recipe: getViewingRecipe(state)
});

const mapDispatchToProps = dispatch => ({
	viewRecipe: id => dispatch(viewRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
