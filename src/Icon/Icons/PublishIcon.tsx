import React from 'react';
import Icon from '../index';

const PublishIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
  	<path d="M16,0 L12,14.5116279 L6.58066667,9.73664271 L11.782,4.30533615 L4.81,9.07240592 L0,7.9154334 L16,0 Z M5.95348837,11.1627907 L5.95348837,16 L8.18604651,13.0766947 L5.95348837,11.1627907 Z"></path>
  </Icon>;

PublishIcon.propTypes = {
  ...Icon.propTypes,
};

export default PublishIcon;
