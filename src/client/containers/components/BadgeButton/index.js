import Button from 'components/common/Button';

const BadgeButton = Button.extend`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border-width: 0px;
	background: #f8f8f8;
	-webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);

	&:hover {
		filter: brightness(95%);
	}
`;

export default BadgeButton;
