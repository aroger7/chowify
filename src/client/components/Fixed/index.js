import DIV from 'components/common/DIV';
import PropTypes from 'prop-types';

const Fixed = DIV.extend`
  width: ${props => (isNaN(props.width) ? props.width : `${props.width}px`)};
  height: ${props => (isNaN(props.height) ? props.height : `${props.height}px`)};
  position: fixed;
  bottom: ${props => (isNaN(props.bottom) ? props.bottom : `${props.bottom}px`)};
  left: ${props => (isNaN(props.left) ? props.left : `${props.left}px`)};
  right: ${props => (isNaN(props.right) ? props.right : `${props.right}px`)};
  top: ${props => (isNaN(props.top) ? props.top : `${props.top}px`)};
  z-index: ${props => props.zIndex};
`;

Fixed.defaultProps = {
  bottom: 'auto',
  height: 'auto',
  left: 'auto',
  right: 'auto',
  top: 'auto',
  width: 'auto',
  zIndex: 'auto'
};

Fixed.propTypes = {
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Fixed;
