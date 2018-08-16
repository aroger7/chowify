import PropTypes from 'prop-types';

import DIV from 'components/common/DIV';

const Card = DIV.extend`
  display: inline-block;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
`;

Card.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};

Card.defaultProps = {
  height: 'auto',
  width: 'auto'
};

export default Card;
