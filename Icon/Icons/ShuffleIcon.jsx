import React from 'react';
import Icon from '../../Icon';

const ShuffleIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <g transform="translate(1.000000, 1.000000)">
      <path d="M12,8.99077797 C12,8.44358641 12.3210526,8.32105255 12.7109581,8.71095812 L14.6440798,10.6440798 C14.8406491,10.8406491 14.838707,11.161293 14.6440798,11.3559202 L12.7109581,13.2890419 C12.3183068,13.6816932 12,13.5490248 12,13.009222 L12,8.99077797 Z" />
      <path d="M12,0.990777969 C12,0.443586406 12.3210526,0.321052551 12.7109581,0.710958123 L14.6440798,2.6440798 C14.8406491,2.8406491 14.838707,3.16129303 14.6440798,3.3559202 L12.7109581,5.28904188 C12.3183068,5.68169321 12,5.54902482 12,5.00922203 L12,0.990777969 Z" />
      <polyline stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(6.000000, 7.000000) scale(1, -1) translate(-6.000000, -7.000000) " points="12 3.00109863 10 3 2 11 0 11" />
      <polyline stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="8.5 4.5 10 3 13 3" />
      <polyline stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="0 11 2 11 3.5 9.5" />
    </g>
  </Icon>;

ShuffleIcon.propTypes = {
  ...Icon.propTypes,
};

export default ShuffleIcon;
