import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Flex } from 'grid-styled';
import InfiniteScroller from 'react-infinite-scroller';

import RecipeListCardContainer from 'containers/RecipeListCardContainer';
import ColumnSpacer from './ColumnSpacer';
import GutterSpacer from './GutterSpacer';
import List from './List';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.masonry = React.createRef();
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:8080/recipes', {
        params: { limit: 5 }
      });
      this.props.setAllRecipes(res.data.recipes, res.data.next);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  async handleLoadMore(page) {
    console.log(`loading page ${page}`);
    try {
      const res = await axios.get('http://localhost:8080/recipes', {
        params: { limit: 5, next: this.props.next }
      });
      this.props.setAllRecipes(
        this.props.recipes.concat(res.data.recipes),
        res.data.next
      );
    } catch (e) {
      console.log(e);
      return;
    }
  }

  handleImagesLoaded() {
    console.log('laid out recipe list');
  }

  render() {
    return (
      <InfiniteScroller
        hasMore={this.props.next !== null}
        loadMore={this.handleLoadMore}
        threshold={250}
        style={{ width: '100%' }}
      >
        <Flex justifyContent="center">
          <List
            elementType="ul"
            options={{
              columnWidth: 'li:nth-child(1)',
              gutter: 'li:nth-child(2)',
              itemSelector: 'li:not(:nth-child(1)):not(:nth-child(2))'
            }}
            disableImagesLoaded={false}
            onImagesLoaded={this.handleImagesLoaded}
            updateOnEachImageLoad={false}
            innerRef={this.masonry}
          >
            <ColumnSpacer />
            <GutterSpacer />
            {this.props.recipes.map(recipe => (
              <RecipeListCardContainer key={recipe._id} recipe={recipe} />
            ))}
          </List>
        </Flex>
      </InfiniteScroller>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array
};

export default RecipeList;
