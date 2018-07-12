import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from 'components/common/Label';
import TextBox from 'components/common/TextBox';
import TextArea from 'components/common/TextArea';
import WindowOverlay from 'components/WindowOverlay';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import IconButton from 'components/IconButton';
import { Flex } from 'grid-styled';
import Form from 'components/common/Form';
import { v1 } from 'uuid';
import Title from './Title';
import Card from './Card';

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      name: ''
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      description: '',
      name: ''
    });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addRecipe({
      id: v1(),
      name: this.state.name,
      description: this.state.description,
      image: '',
      ingredients: [],
      directions: []
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <WindowOverlay>
          <Flex width={1} alignItems="flex-end" justifyContent="flex-end">
            <IconButton type="submit">
              <FontAwesomeIcon icon={faCheck} color="#ffffff" size="2x" />
            </IconButton>
            <IconButton
              type="button"
              onClick={() => this.props.cancelAddRecipe()}
            >
              <FontAwesomeIcon icon={faTimes} color="#ffffff" size="2x" />
            </IconButton>
          </Flex>
          <Flex justifyContent="center">
            <Card>
              <Flex flexDirection="column">
                <Title>Add Recipe</Title>
                <Flex flexDirection="column" py="10px">
                  <Label for="name">Name:</Label>
                  <TextBox
                    name="name"
                    onChange={this.handleNameChange}
                    value={this.state.name}
                  />
                </Flex>
                <Flex flexDirection="column" py="10px">
                  <Label for="description">Description:</Label>
                  <TextArea
                    name="description"
                    onChange={this.handleDescriptionChange}
                    value={this.state.description}
                  />
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </WindowOverlay>
      </Form>
    );
  }
}

AddRecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  allRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  cancelAddRecipe: PropTypes.func.isRequired
};

export default AddRecipeForm;
