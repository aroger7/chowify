import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UL from 'components/common/UL';
import Card from 'components/Menu/Card';

const Menu = ({ children }) => {
  return (
    <Card>
      <UL>{children}</UL>
    </Card>
  );
};

export default Menu;
