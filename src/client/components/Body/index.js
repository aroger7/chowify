import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import RecipeListContainer from 'containers/RecipeListContainer';

const Body = () => (
  <Flex flexDirection="column" alignItems="center" justifyContent="center">
    <RecipeListContainer />
  </Flex>
);

export default Body;
