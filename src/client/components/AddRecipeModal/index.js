import React, { Component } from 'react';
import { Flex } from 'grid-styled';
import Space from 'styled-space';

import AddRecipeFormContainer from 'containers/AddRecipeFormContainer';
import Card from 'components/Card';
import WindowOverlay from 'components/WindowOverlay';

class AddRecipeModal extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.hideModal();
  }

  handleCancel() {
    this.props.hideModal();
  }

  render() {
    return (
      <WindowOverlay>
        <Flex justifyContent="center" py="10px">
          <Card width="500px">
            <AddRecipeFormContainer
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
            />
          </Card>
        </Flex>
      </WindowOverlay>
    );
  }
}

export default AddRecipeModal;
