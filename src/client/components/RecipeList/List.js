import styled from "styled-components";
import Masonry from "react-masonry-component";

const List = styled(Masonry)`
	width: 100%;
	max-width: 1500px;
	min-height: 100%;
	list-style-type: none;
	padding: 0px;

	& > * {
		margin-bottom: 5px;
	}
`;

export default List;