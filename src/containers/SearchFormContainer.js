import { connect } from "react-redux";
import { searchRecipeNames } from "actions";
import SearchForm from "components/SearchForm";

const mapDispatchToProps = dispatch => ({
	searchRecipeNames: search => dispatch(searchRecipeNames(search))
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
