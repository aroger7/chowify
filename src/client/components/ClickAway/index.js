import React, { Component } from 'react';

import DIV from 'components/common/DIV';

class ClickAway extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown);
    console.log('mounted ClickAway');
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown);
    console.log('unmounting ClickAway');
  }

  handleMouseDown(event) {
    if (!this.ref.current.contains(event.target)) {
      console.log('You clicked away from it!');
      this.props.onClickAway(event);
    } else {
      console.log('You clicked on it!');
    }
  }

  render() {
    return <DIV innerRef={this.ref}>{this.props.children}</DIV>;
  }
}

export default ClickAway;
