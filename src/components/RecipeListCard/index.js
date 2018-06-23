import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Gradient from "./Gradient";
import Thumbnail from "./Thumbnail";
import Title from "./Title";
import { Flex } from "grid-styled";

const RecipeListCard = ({ recipe, viewRecipe }) => {
	return (
		<Card onClick={() => viewRecipe(recipe.id)}>
			<Thumbnail url={recipe.image} />
			<Gradient>
				<Flex
					width={1}
					flexDirection="column"
					justifyContent="flex-end"
					style={{ height: "100%" }}
				>
					<Title>{recipe.name}</Title>
				</Flex>
			</Gradient>
		</Card>
	);
};

export default RecipeListCard;
