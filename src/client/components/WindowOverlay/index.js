import Overlay from "components/Overlay";

const WindowOverlay = Overlay.extend`	
	position: fixed;
	width: 100vw;
	height: 100vh;
	overflow-y: auto;	
`;

export default WindowOverlay;