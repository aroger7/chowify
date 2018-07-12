import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchFormContainer from 'containers/SearchFormContainer';
import Header from 'components/common/Header';
import Fixed from 'components/Fixed';
import Spacer from './Spacer';

class FixedHeader extends Component {
  constructor(props) {
    super(props);
    this.fixedRef = React.createRef();
    this.spacerRef = React.createRef();
  }

  componentDidMount() {
    this.setSpacerHeight();
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  componentDidUpate() {
    this.setSpacerHeight();
  }

  handleWindowResize(event) {
    this.setSpacerHeight();
  }

  render() {
    return (
      <Header>
        <Fixed
          top="0px"
          left="0px"
          width="100%"
          zIndex={10}
          innerRef={this.fixedRef}
        >
          {this.props.children}
        </Fixed>
        <Spacer innerRef={this.spacerRef} />
      </Header>
    );
  }

  setSpacerHeight() {
    this.spacerRef.current.style.height = `${
      this.fixedRef.current.offsetHeight
    }px`;
  }
}

export default FixedHeader;
