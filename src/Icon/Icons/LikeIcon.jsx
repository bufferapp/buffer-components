import React from 'react';
import Icon from '../index';

const LikeIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8,3.625 C7.40444444,2.1095 5.736,1 4,1 C1.73955556,1 0,2.6905 0,4.9375 C0,8.025375 3.37155556,10.41325 8,15 C12.6284444,10.41325 16,8.025375 16,4.9375 C16,2.6905 14.2604444,1 12,1 C10.2622222,1 8.59555556,2.1095 8,3.625 Z" />
  </Icon>;

LikeIcon.propTypes = {
  ...Icon.propTypes,
};

export default LikeIcon;
