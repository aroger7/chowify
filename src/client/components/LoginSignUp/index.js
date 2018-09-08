import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import Space from 'styled-space';

import Button from 'components/common/Button';

class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleLoginClick() {
    this.props.history.push('/login');
  }

  handleSignUpClick() {
    this.props.history.push('/signUp');
  }

  render() {
    return (
      <Flex>
        <Space mx="5px">
          <Button onClick={this.handleLoginClick}>Login</Button>
          <Button onClick={this.handleSignUpClick}>Sign Up</Button>
        </Space>
      </Flex>
    );
  }
}

export default LoginSignUp;
