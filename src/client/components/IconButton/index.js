import Button from "components/common/Button";
import PropTypes from "prop-types";

const IconButton = Button.extend`
	background: transparent;


	&:hover {
		filter: brightness(95%);
	}
`;

IconButton.propTypes = {

}

export default IconButton;