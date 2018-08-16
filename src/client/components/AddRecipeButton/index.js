import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

import BadgeButton from 'components/BadgeButton';
import Fixed from 'components/Fixed';

class AddRecipeButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //TODO: Show modal
  }

  render() {
    return (
      <Fixed bottom={25} right={25} zIndex={5}>
        <BadgeButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPlus} color="#000000" />
        </BadgeButton>
      </Fixed>
    );
  }
}

export default AddRecipeButton;
