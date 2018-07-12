import React, { Component } from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.form``;

const SearchFormTextbox = styled.input`
	min-width: 200px;
`;

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    const search = event.target.value;
    clearTimeout(this.delayTimeout);
    this.delayTimeout = setTimeout(() => {
      this.props.searchRecipeNames(search);
    }, 250);
  }

  render() {
    return (
      <SearchFormWrapper>
        <SearchFormTextbox type="text" onChange={this.handleChange} />
      </SearchFormWrapper>
    );
  }
}

export default SearchForm;
