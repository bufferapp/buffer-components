import React from 'react';
import Icon from '../../Icon';

const CloseSmallIcon = ({ color, size }) => (
  <Icon color={color} size={size}>
    <rect height="12" rx="0.5" transform="translate(5.046194, 5.000000) rotate(45.000000) translate(-5.046194, -5.000000)" width="1" x="4.54619413" y="-1" />
    <rect height="12" rx="0.5" transform="translate(5.046194, 5.000000) scale(-1, 1) rotate(45.000000) translate(-5.046194, -5.000000)" width="1" x="4.54619413" y="-1" />
  </Icon>
);

CloseSmallIcon.propTypes = {
  ...Icon.propTypes,
};

export default CloseSmallIcon;
