import React from 'react';
import ClickAway from 'components/ClickAway';

const withClickAway = WrappedComponent => props => {
  return (
    <ClickAway onClickAway={props.onClickAway}>
      <WrappedComponent {...props} />
    </ClickAway>
  );
};

export default withClickAway;
