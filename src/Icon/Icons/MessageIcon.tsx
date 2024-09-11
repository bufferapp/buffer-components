import React from 'react';
import Icon from '../index';

const MessageIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M6.5 1.5C9.48675 1.5 11.5 2.9965 11.5 5.34842C11.5 7.60283 9.81075 8.45779 7.5 9L6.5 11L5.5 9C3.16867 8.45238 1.64257 7.57142 1.64257 5.34842C1.64257 2.9965 3.51325 1.5 6.5 1.5ZM6.5 0C2.91038 0 0 2.39417 0 5.34842C0 7.79242 1.99225 9.85346 4.71304 10.4921L6.5 13L8.28696 10.4921C11.0078 9.85292 13 7.79187 13 5.34842C13 2.39417 10.0896 0 6.5 0Z" transform="translate(0.5)" fill="#596269" />
  </Icon>;

MessageIcon.propTypes = {
  ...Icon.propTypes,
};

export default MessageIcon;

