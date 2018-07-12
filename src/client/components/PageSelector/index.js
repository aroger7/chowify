import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import range from 'lodash/range';
import Button from './Button';

const PageSelectorWrapper = styled.div`
  & > * {
    display: inline-block;
    margin-left: 3px;
    margin-right: 3px;
  }
`;

class PageSelector extends Component {
  constructor(props) {
    super(props);
    this.handleFirstPageButtonClick = this.handleFirstPageButtonClick.bind(
      this
    );
    this.handleLastPageButtonClick = this.handleLastPageButtonClick.bind(this);
    this.handleNextPageButtonClick = this.handleNextPageButtonClick.bind(this);
    this.handlePageNumberButtonClick = this.handlePageNumberButtonClick.bind(
      this
    );
    this.handlePreviousPageButtonClick = this.handlePreviousPageButtonClick.bind(
      this
    );
  }

  handleFirstPageButtonClick() {
    this.props.changePage(0);
  }

  handleLastPageButtonClick() {
    this.props.changePage(this.props.numPages - 1);
  }

  handleNextPageButtonClick() {
    if (this.props.currentPage < this.props.numPages - 1) {
      this.props.changePage(this.props.currentPage + 1);
    }
  }

  handlePageNumberButtonClick(page) {
    this.props.changePage(page);
  }

  handlePreviousPageButtonClick() {
    if (this.props.currentPage > 0) {
      this.props.changePage(this.props.currentPage - 1);
    }
  }

  render() {
    const startPageNum = this.props.currentPage - 2 >= 0 ? this.props.currentPage - 2 : 0;
    const endPageNum = this.props.currentPage + 2 < this.props.numPages
      ? this.props.currentPage + 2
      : this.props.numPages - 1;
    const pageRange = range(startPageNum, endPageNum + 1);

    return (
      <PageSelectorWrapper>
        <Button
          key="first"
          content="<<"
          disabled={this.props.numPages < 1 || this.props.currentPage <= 0}
          onClick={this.handleFirstPageButtonClick}
        />
        <Button
          key="previous"
          content="<"
          disabled={this.props.currentPage <= 0}
          onClick={this.handlePreviousPageButtonClick}
        />
        {pageRange.map(page => (
          <Button
            key={page}
            content={page + 1}
            onClick={() => this.handlePageNumberButtonClick(page)}
          />
        ))}
        <Button
          key="next"
          content=">"
          disabled={this.props.currentPage >= endPageNum}
          onClick={this.handleNextPageButtonClick}
        />
        <Button
          key="last"
          content=">>"
          disabled={
            this.props.numPages < 1 || this.props.currentPage >= endPageNum
          }
          onClick={this.handleLastPageButtonClick}
        />
      </PageSelectorWrapper>
    );
  }
}

PageSelector.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired
};

export default PageSelector;
