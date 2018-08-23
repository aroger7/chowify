import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import axios from 'axios';

import Card from './Card';
import Gradient from './Gradient';
import Thumbnail from './Thumbnail';
import Title from './Title';
import { modalTypes } from 'modals';

//TODO: Add link or button to top level
const RecipeListCard = ({ recipe, showModal }) => (
  <Card
    onClick={async () => {
      const res = await axios.get(
        `http://localhost:8080/recipes/${recipe._id}`
      );
      showModal(modalTypes.RECIPE, { recipe: res.data });
    }}
  >
    <Thumbnail url={recipe.imageUrl} />
    <Gradient>
      <Flex
        width={1}
        flexDirection="column"
        justifyContent="flex-end"
        style={{ height: '100%' }}
      >
        <Title>{recipe.name}</Title>
      </Flex>
    </Gradient>
  </Card>
);

export default RecipeListCard;
