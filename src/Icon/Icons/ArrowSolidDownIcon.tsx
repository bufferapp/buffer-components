import React from 'react';
import Icon from '../index';

const ArrowSolidDownIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <polygon points="0 0 16 0 8 8" />
  </Icon>;

ArrowSolidDownIcon.propTypes = {
  ...Icon.propTypes,
};

export default ArrowSolidDownIcon;
