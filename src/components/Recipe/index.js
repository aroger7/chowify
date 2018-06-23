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
import { Flex, Box } from "grid-styled";

const Recipe = ({ recipe }) => {
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
	);
};

export default Recipe;
