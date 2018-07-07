import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeListCardContainer from "containers/RecipeListCardContainer";
import ColumnSpacer from "./ColumnSpacer";
import GutterSpacer from "./GutterSpacer";
import List from "./List";

class RecipeList extends Component {
	constructor(props) {
		super(props);
		this.masonry = React.createRef();
		this.handleImagesLoaded = this.handleImagesLoaded.bind(this);
	}

	handleImagesLoaded() {
		console.log("laid out recipe list");
	}

	render() {
		return (
			<List
				elementType={"ul"}
				options={{
					columnWidth: "li:nth-child(1)",
					gutter: "li:nth-child(2)",
					itemSelector: "li:not(:nth-child(1)):not(:nth-child(2))"
				}}
				disableImagesLoaded={false}
				onImagesLoaded={this.handleImagesLoaded}
				updateOnEachImageLoad={false}
				innerRef={this.masonry}
			>
				<ColumnSpacer />
				<GutterSpacer />
				{this.props.recipes.map(recipe => (
					<RecipeListCardContainer key={recipe.id} recipe={recipe} />
				))}
			</List>
		);
	}
}

RecipeList.propTypes = {
	recipes: PropTypes.array
};

export default RecipeList;
