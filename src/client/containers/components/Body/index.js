import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import RecipeListContainer from 'containers/RecipeListContainer';
import PageSelectorContainer from 'containers/PageSelectorContainer';

const Body = () => (
  <Flex
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
		>
    <RecipeListContainer />
    <PageSelectorContainer />
  </Flex>
);

export default Body;
