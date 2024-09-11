import React from 'react';
import Icon from '../index';

const ArrowSolidLeftIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <polygon points="16 0 16 16 8 8" />
  </Icon>;

ArrowSolidLeftIcon.propTypes = {
  ...Icon.propTypes,
};

export default ArrowSolidLeftIcon;
