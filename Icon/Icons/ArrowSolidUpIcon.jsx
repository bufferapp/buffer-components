import React from 'react';
import Icon from '../../Icon';

const ArrowSolidUpIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <polygon points="0 16 16 16 8 8" />
  </Icon>;

ArrowSolidUpIcon.propTypes = {
  ...Icon.propTypes,
};

export default ArrowSolidUpIcon;
