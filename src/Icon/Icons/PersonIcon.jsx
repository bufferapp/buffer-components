import React from 'react';
import Icon from '../index';

const PersonIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8,10 C6.34314575,10 5,8.209139 5,6 C5,3.790861 6.34314575,2 8,2 C9.65685425,2 11,3.790861 11,6 C11,8.209139 9.65685425,10 8,10 Z M2,12.5 C2,11.6715729 2.67955446,11 3.49554521,11 L12.5044548,11 C13.3304216,11 14,11.6657972 14,12.5 L14,14 L2,14 L2,12.5 Z" />
  </Icon>;

PersonIcon.propTypes = {
  ...Icon.propTypes,
};

export default PersonIcon;
