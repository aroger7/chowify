import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageSelectorButtonWrapper = styled.button`
	background: transparent;
	border-width: 2px;
	border-style: solid;
	border-color: #f8f8f8;
	color: #f8f8f8;
	box-shadow: none;
	padding: 5px;
	font: 16px "PT Sans Narrow", sans-serif;

	&[disabled] {
		border-color: rgba(248, 248, 248, 0.5);
		color: rgba(248, 248, 248, 0.5);
	}

	&:hover {
		background: rgba(0, 0, 0, 0.5);

		&[disabled] {
			background: transparent;
		}
	}
`;

const PageSelectorButton = ({ content, disabled, onClick }) => (
  <PageSelectorButtonWrapper
    disabled={disabled}
    onClick={onClick}
    type="button"
		>
    {content}
  </PageSelectorButtonWrapper>
);

PageSelectorButton.defaultProps = {
  content: null,
  disabled: false
};

PageSelectorButton.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  onClick: PropTypes.func
};

export default PageSelectorButton;
