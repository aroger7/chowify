import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import Space from 'styled-space';
import axios from 'axios';

import Form from 'components/common/Form';
import P from 'components/common/P';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const CHOWIFY_USER_KEY = 'CHOWIFY_USER';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      userName: ''
    };
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleCancelClick(e) {
    // if (this.props.onCancel) {
    //   this.props.onCancel(e);
    // }
    this.props.history.goBack();
  }

  handlePasswordChange(e) {
    this.setState(Object.assign({}, this.state, { password: e.target.value }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/users/login', {
        userName: this.state.userName,
        password: this.state.password
      });
      const authToken = res.headers['x-auth'];
      window.localStorage.setItem(CHOWIFY_USER_KEY, authToken);
      this.props.setAuthToken(authToken);
      this.props.setCurrentUser(res.data);
      if (this.props.onSubmit) {
        this.props.onSubmit(e);
      }
    } catch (e) {
      console.log('here');
      return;
    }
  }

  handleUserNameChange(e) {
    this.setState(Object.assign({}, this.state, { userName: e.target.value }));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Flex flexDirection="column" alignItems="center">
          <P>Welcome back to tasty!</P>
          <Space my="10px">
            <Input
              type="text"
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={this.handleUserNameChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Space>
          <Box>
            <Space mx="5px">
              <Button>Login</Button>
              <Button onClick={this.handleCancelClick}>Cancel</Button>
            </Space>
          </Box>
        </Flex>
      </Form>
    );
  }
}

export default LoginForm;
