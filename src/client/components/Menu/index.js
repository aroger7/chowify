import React from 'react';
import PropTypes from 'prop-types';

import UL from 'components/common/UL';
import Card from 'components/Menu/Card';

const Menu = ({ children }) => (
  <Card>
    <UL>{children}</UL>
  </Card>
);

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Menu;
