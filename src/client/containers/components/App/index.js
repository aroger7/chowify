import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import FixedHeader from 'components/FixedHeader';
import Body from 'components/Body';
import Fixed from 'components/Fixed';
import BadgeButton from 'components/BadgeButton';
import AddRecipeFormContainer from 'containers/AddRecipeFormContainer';
import RecipeFormContainer from 'containers/RecipeFormContainer';
import { Flex, Box } from 'grid-styled';
import RecipeForm from 'components/RecipeForm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import SearchFormContainer from 'containers/SearchFormContainer';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #d3d3d3;
  overflow-y: ${props => (props.viewingRecipe ? 'visible' : 'auto')};
`;

const App = ({
  beginAddRecipe, isAdding, viewingRecipe, viewRecipe
}) => {
  // hack for window overlay scrollbar working properly
  document.body.style.overflowY = viewingRecipe || isAdding ? 'hidden' : 'auto';

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <FixedHeader>
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            p="10px"
            style={{ background: '#a8a8a8' }}
          >
            <SearchFormContainer />
          </Flex>
        </FixedHeader>
        <Body />
        <Fixed bottom={25} right={25} zIndex={5}>
          <BadgeButton onClick={() => beginAddRecipe()}>
            <FontAwesomeIcon icon={faPlus} color="#000000" />
          </BadgeButton>
        </Fixed>
        {isAdding ? <AddRecipeFormContainer /> : null}
        {viewingRecipe ? <RecipeFormContainer /> : null}
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
