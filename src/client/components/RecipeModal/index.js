import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import WindowOverlay from 'components/WindowOverlay';
import Card from 'components/Card';
import Title from 'components/RecipeModal/Title';
import Description from 'components/RecipeModal/Description';
import SectionTitle from 'components/RecipeModal/SectionTitle';
import OL from 'components/common/OL';
import UL from 'components/common/UL';
import LI from 'components/common/LI';
import P from 'components/common/P';
import withClickAway from 'hocs/withClickAway';

const RecipeCard = withClickAway(Card);

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.handleClickAway = this.handleClickAway.bind(this);
  }

  handleClickAway() {
    this.props.hideModal();
  }

  render() {
    const { recipe } = this.props;
    return (
      <WindowOverlay>
        <Flex width={1} pt="1em" flexDirection="column" alignItems="center">
          <RecipeCard width="700px" onClickAway={this.handleClickAway}>
            <Title>{recipe.name}</Title>
            {recipe.imageUrl ? (
              <Flex>
                <Box width={2 / 3} mx="0.5em" mt="-1em">
                  <Description>{recipe.description}</Description>
                </Box>
                <Box width={1 / 3} mx="0.5em">
                  <img src={recipe.imageUrl} style={{ width: '100%' }} />
                </Box>
              </Flex>
            ) : (
              <Description>{recipe.description}</Description>
            )}
            <Flex width={1}>
              <Box width={1 / 2} mr="0.5em">
                <SectionTitle>Ingredients</SectionTitle>
                {recipe.ingredients.length > 0 ? (
                  <UL>
                    {recipe.ingredients.map((ingredient, index) => (
                      <LI key={index}>{ingredient}</LI>
                    ))}
                  </UL>
                ) : (
                  <P>This recipe doesn't have any ingredients yet!</P>
                )}
              </Box>
              <Box width={1 / 2} ml="0.5em">
                <SectionTitle>Directions</SectionTitle>
                {recipe.directions.length > 0 ? (
                  <OL type="1">
                    {recipe.directions.map((direction, index) => (
                      <LI key={index}>{direction}</LI>
                    ))}
                  </OL>
                ) : (
                  <P>This recipe doesn't have any directions yet!</P>
                )}
              </Box>
            </Flex>
          </RecipeCard>
        </Flex>
      </WindowOverlay>
    );
  }
}

export default RecipeModal;
