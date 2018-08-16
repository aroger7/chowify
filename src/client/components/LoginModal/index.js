import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import WindowOverlay from 'components/WindowOverlay';
import Card from 'components/Card';
import LoginFormContainer from 'containers/LoginFormContainer';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.hideModal();
  }

  handleSubmit() {
    this.props.hideModal();
  }

  render() {
    return (
      <WindowOverlay>
        <Flex justifyContent="center" pt="10px">
          <Card width="500px">
            <LoginFormContainer
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
            />
          </Card>
        </Flex>
      </WindowOverlay>
    );
  }
}

export default LoginModal;
