import { connect } from "react-redux";
import { addRecipe, cancelAddRecipe, changeCreatingRecipe } from "actions";
import AddRecipeForm from "components/AddRecipeForm";

const mapDispatchToProps = dispatch => ({
	addRecipe: recipe => dispatch(addRecipe(recipe)),
	cancelAddRecipe: () => dispatch(cancelAddRecipe()),
	changeCreatingRecipe: recipe => dispatch(changeCreatingRecipe(recipe)),
});

const mapStateToProps = state => ({
	recipe: state.recipes.creatingRecipe
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);
