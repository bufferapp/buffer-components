import React from 'react';
import Icon from '../../Icon';

const ArrowSolidRightIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <polygon points="0 0 0 16 8 8" />
  </Icon>;

ArrowSolidRightIcon.propTypes = {
  ...Icon.propTypes,
};

export default ArrowSolidRightIcon;
