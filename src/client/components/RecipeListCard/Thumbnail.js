import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RecipeThumbnailWrapper = styled.img`
	display: block;
	width: 100%;
	min-height: 200px;
`;

const Thumbnail = ({ url }) => {
	return <RecipeThumbnailWrapper src={url} />;
};

Thumbnail.propTypes = {
	url: PropTypes.string
};

export default Thumbnail;