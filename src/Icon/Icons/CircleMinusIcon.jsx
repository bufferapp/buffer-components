import React from 'react';
import Icon from '../index';

const CircleMinusIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 Z M4,8 C4,7.44771525 4.45303631,7 4.99703014,7 L11.0029699,7 C11.5536144,7 12,7.44386482 12,8 L12,8 C12,8.55228475 11.5469637,9 11.0029699,9 L4.99703014,9 C4.4463856,9 4,8.55613518 4,8 L4,8 Z" />
  </Icon>;

CircleMinusIcon.propTypes = {
  ...Icon.propTypes,
};

export default CircleMinusIcon;
