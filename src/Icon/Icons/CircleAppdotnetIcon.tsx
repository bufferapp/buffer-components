import React from 'react';
import Icon from '../index';

const CircleAppdotnetIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <circle cx="8" cy="8" r="7.976" />
    <path d="M3,11.5 L4.02262767,11.5 L5.1601792,9.72205939 L10.8399831,9.72205939 L11.9768854,11.5 L13,11.5 L7.99983768,4 L3,11.5 L3,11.5 Z M5.8138493,8.91390457 L7.99983768,5.63505883 L10.1858261,8.91390457 L5.8138493,8.91390457 L5.8138493,8.91390457 L5.8138493,8.91390457 Z"fill="#ffffff" />
  </Icon>;

CircleAppdotnetIcon.propTypes = {
  ...Icon.propTypes,
};

export default CircleAppdotnetIcon;
