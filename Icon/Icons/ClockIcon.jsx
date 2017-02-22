import React from 'react';
import Icon from '../../Icon';

const ClockIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z" />
    <rect x="7" y="3" width="2" height="6" rx="1" />
    <rect transform="translate(9.418427, 9.578427) rotate(-225.000000) translate(-9.418427, -9.578427) " x="8.41842728" y="6.57842712" width="2" height="6" rx="1" />
  </Icon>;

ClockIcon.propTypes = {
  ...Icon.propTypes,
};

export default ClockIcon;
