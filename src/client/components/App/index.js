import React, { Component } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Space from 'styled-space';
import { Manager, Reference, Popper } from 'react-popper';

import theme from 'theme';
import { modalTypes } from 'modals';
import FixedHeader from 'components/FixedHeader';
import Body from 'components/Body';
import AddRecipeButtonContainer from 'containers/AddRecipeButtonContainer';
import ModalRootContainer from 'containers/ModalRootContainer';
import AddRecipeFormContainer from 'containers/AddRecipeFormContainer';
import RecipeFormContainer from 'containers/RecipeFormContainer';
import SearchFormContainer from 'containers/SearchFormContainer';
import LoginSignUpContainer from 'containers/LoginSignUpContainer';
import UserDropdownContainer from 'containers/UserDropdownContainer';

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
    this.state = {
      menuOpened: false
    };
    this.handleUserMenuClick = this.handleUserMenuClick.bind(this);
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

  handleUserMenuClick() {
    this.setState(Object.assign({}, this.state, { menuOpened: true }));
    console.log('user menu clicked');
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
                <UserDropdownContainer />
              )}
            </Flex>
          </FixedHeader>
          <Body />
          {this.props.currentUser ? <AddRecipeButtonContainer /> : null}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
