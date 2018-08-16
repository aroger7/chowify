import React, { Component } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Space from 'styled-space';

import theme from 'theme';
import { modalTypes } from 'modals';
import FixedHeader from 'components/FixedHeader';
import Body from 'components/Body';
import AddRecipeButton from 'components/AddRecipeButton';
import ModalRootContainer from 'containers/ModalRootContainer';
import AddRecipeFormContainer from 'containers/AddRecipeFormContainer';
import RecipeFormContainer from 'containers/RecipeFormContainer';
import SearchFormContainer from 'containers/SearchFormContainer';
import LoginSignUpContainer from 'containers/LoginSignUpContainer';

const CHOWIFY_USER_KEY = 'CHOWIFY_USER';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #d3d3d3;
  overflow-y: ${props => (props.viewingRecipe ? 'visible' : 'auto')};
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const authToken = window.localStorage.getItem(CHOWIFY_USER_KEY);
    if (authToken) {
      try {
        const res = await axios.get('http://localhost:8080/users/current', {
          headers: {
            'x-auth': authToken
          }
        });
        this.props.setAuthToken(authToken);
        this.props.setCurrentUser(res.data);
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    // hack for window overlay scrollbar working properly
    // document.body.style.overflowY =
    //   viewingRecipe || isAdding ? 'hidden' : 'auto';
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModalRootContainer />
          <FixedHeader>
            <Flex
              alignItems="center"
              justifyContent="flex-end"
              p="10px"
              style={{ background: '#a8a8a8' }}
            >
              {!this.props.currentUser ? (
                <LoginSignUpContainer />
              ) : (
                `Hi ${this.props.currentUser.userName}!`
              )}
            </Flex>
          </FixedHeader>
          <Body />
          {this.props.currentUser ? <AddRecipeButton /> : null}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
