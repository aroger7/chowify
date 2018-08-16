import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import Space from 'styled-space';
import axios from 'axios';
import MediaQuery from 'react-responsive';

import WindowOverlay from 'components/WindowOverlay';
import Card from 'components/Card';
import Form from 'components/common/Form';
import Button from 'components/common/Button';
import P from 'components/common/P';
import Input from 'components/common/Input';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordIsValid: true,
      passwordErrors: [],
      userName: '',
      userNameIsValid: true,
      userNameErrors: []
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handlePasswordChange(e) {
    this.setState(Object.assign({}, this.state, { password: e.target.value }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    let res;
    try {
      res = await axios.post('http://localhost:8080/users', {
        userName: this.state.userName,
        password: this.state.password
      });
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    } catch (e) {
      if (e.response.data.errors) console.log(e.response);
      return;
    }
  }

  handleUsernameChange(e) {
    this.setState(Object.assign({}, this.state, { userName: e.target.value }));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <P>Let's get you cooking, shall we?</P>
          <Space my="10px">
            <Input
              type="text"
              name="userName"
              placeholder="Username"
              onChange={this.handleUsernameChange}
              value={this.state.userName}
            />
            {!this.state.userNameIsValid
              ? this.state.userNameErrors.map(err => <P>err</P>)
              : null}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </Space>
        </Flex>
        <Flex justifyContent="center" flexDirection="row" my="10px">
          <Space mx="5px">
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={this.handleCancel}>
              Cancel
            </Button>
          </Space>
        </Flex>
      </Form>
    );
  }
}

export default SignUpForm;
