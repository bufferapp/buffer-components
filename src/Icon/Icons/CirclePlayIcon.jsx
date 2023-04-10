import React from 'react';
import Icon from '../index';

const CirclePinterestIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <g fillRule="evenodd">
      <path d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M6.38755779,11.166206 L11.5095603,8.46752615 C12.0065375,8.20567891 11.999745,7.79044606 11.5095603,7.53208404 L6.38755779,4.83242594 C5.89058062,4.57048377 5.5,4.81032621 5.5,5.36013253 L5.5,10.6383299 C5.5,11.1791199 5.89737316,11.4244744 6.38755779,11.166206 Z" />
    </g>
  </Icon>;

CirclePinterestIcon.propTypes = {
  ...Icon.propTypes,
};

export default CirclePinterestIcon;
