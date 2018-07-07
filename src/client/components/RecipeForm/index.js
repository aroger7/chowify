import React from "react";
import styled from "styled-components";
import Title from "./Title";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import DirectionList from "./DirectionList";
import Direction from "./Direction";
import IngredientList from "./IngredientList";
import Ingredient from "./Ingredient";
import Card from "./Card";
import WindowOverlay from "components/WindowOverlay";
import { Flex, Box } from "grid-styled";
import IconButton from "components/IconButton";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

const RecipeForm = ({ recipe, viewRecipe }) => {
	const ingredients = recipe.ingredients
		? recipe.ingredients.map((ingredient, index) => (
				<Ingredient key={index}>{ingredient}</Ingredient>
		  ))
		: null;
	const directions = recipe.directions
		? recipe.directions.map((direction, index) => (
				<Direction key={index}>{direction}</Direction>
		  ))
		: null;

	return (
		<WindowOverlay>
			<Flex width={1} alignItems="flex-end" justifyContent="flex-end">
				<IconButton type="button">
					<FontAwesomeIcon icon={faEdit} color="#ffffff" size="2x" />
				</IconButton>
				<IconButton
					type="button"
					onClick={() => viewRecipe(null)}
				>
					<FontAwesomeIcon icon={faTimes} color="#ffffff" size="2x" />
				</IconButton>
			</Flex>
			<Flex width={1} flexDirection="column" alignItems="center">
				<Card>
					<Title>{recipe.name}</Title>
					<Description>{recipe.description}</Description>
					<Flex width={1}>
						<Box width={1 / 2} mr={"10px"}>
							<SectionTitle>Ingredients</SectionTitle>
							<IngredientList>{ingredients}</IngredientList>
						</Box>
						<Box width={1 / 2} ml={"10px"}>
							<SectionTitle>Directions</SectionTitle>
							<DirectionList type="1">{directions}</DirectionList>
						</Box>
					</Flex>
				</Card>
			</Flex>
		</WindowOverlay>
	);
};

export default RecipeForm;
