import LI from "components/common/LI";

const Card = LI.extend`
	display: block;
	width: 32.5%;
	padding: 0px;
	min-height: 200px;
	position: relative;
	background-color: #ffffff;
	transition: filter 0.5s;

	&:hover {
		filter: brightness(120%);
	}
`;

export default Card;