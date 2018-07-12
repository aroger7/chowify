import { connect } from 'react-redux';
import { changePage } from 'actions';
import { getNumPages } from 'selectors';
import PageSelector from 'components/PageSelector';

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch(changePage(page))
});

const mapStateToProps = state => ({
  currentPage: state.recipes.currentPage,
  numPages: getNumPages(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSelector);
