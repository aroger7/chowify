import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Flex } from 'grid-styled';
import Space from 'styled-space';

import Input from 'components/common/Input';
import TextBox from 'components/common/TextBox';
import TextArea from 'components/common/TextArea';
import Form from 'components/common/Form';
import Title from './Title';
import Card from './Card';
import Button from 'components/common/Button';

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: ''
    };
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancelClick(e) {
    this.props.onCancel();
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8080/recipes',
        { name: this.state.name, description: this.state.description },
        {
          headers: {
            'x-auth': this.props.authToken
          }
        }
      );
      this.props.onSubmit(e);
    } catch (e) {
      console.log(e);
      return;
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Flex flexDirection="column">
          <Title>Add Recipe</Title>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
          />
          <Flex flexDirection="column" py="10px">
            <Label for="description">Description:</Label>
            <TextArea
              name="description"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
            />
          </Flex>
          <Flex justifyContent="center">
            <Space mx="5px">
              <Button type="submit">Create</Button>
              <Button type="button" onClick={this.handleCancelClick}>
                Cancel
              </Button>
            </Space>
          </Flex>
        </Flex>
      </Form>
    );
  }
}

export default AddRecipeForm;
