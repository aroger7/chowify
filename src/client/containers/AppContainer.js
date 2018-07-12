import { connect } from 'react-redux';
import { beginAddRecipe, viewRecipe } from 'actions';
import { getViewingRecipe } from 'selectors';
import App from 'components/App';

const mapDispatchToProps = dispatch => ({
  beginAddRecipe: () => dispatch(beginAddRecipe()),
  viewRecipe: id => dispatch(viewRecipe(id))
});

const mapStateToProps = state => ({
  isAdding: state.app.isAdding,
  viewingRecipe: getViewingRecipe(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
