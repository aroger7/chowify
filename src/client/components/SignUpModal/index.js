import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import WindowOverlay from 'components/WindowOverlay';
import Card from 'components/Card';
import SignUpFormContainer from 'containers/SignUpFormContainer';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.hideModal();
  }

  handleSubmit(e) {
    this.props.hideModal();
  }

  render() {
    return (
      <WindowOverlay>
        <Flex pt="10px" justifyContent="center">
          <Card width="500px">
            <SignUpFormContainer
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
            />
          </Card>
        </Flex>
      </WindowOverlay>
    );
  }
}

export default SignUpModal;
