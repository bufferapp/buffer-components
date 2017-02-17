import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Icon = ({
  children,
  color,
  size,
}) => {
  const classes = classNames(styles, 'icon', {
    large: size === 'large',
    small: size === 'small',
  });
  const colors = classNames({
    curiousBlue: color === 'curious-blue',
    curiousBlueLight: color === 'curious-blue-light',
    curiousBlueUltraLight: color === 'curious-blue-ultra-light',
    denim: color === 'denim',
    toryBlue: color === 'tory-blue',
    appdotnet: color === 'appdotnet',
    facebook: color === 'facebook',
    googleplus: color === 'googleplus',
    linkedin: color === 'linkedin',
    pinterest: color === 'pinterest',
    twitter: color === 'twitter',
    outerSpace: color === 'outer-space',
    outerSpaceLight: color === 'outer-space-light',
    outerSpaceUltraLight: color === 'outer-space-ultra-light',
    shuttleGray: color === 'shuttle-gray',
    nevada: color === 'nevada',
    geyser: color === 'geyser',
    mystic: color === 'mystic',
    aquaHaze: color === 'aqua-haze',
    white: color === 'white',
    shamrock: color === 'shamrock',
    saffron: color === 'saffron',
    torchRed: color === 'torch-red',
  });
  return (
    <svg
      className={classes}
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g className={colors}>
          {children}
        </g>
      </g>
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'curious-blue',
    'curious-blue-light',
    'curious-blue-ultra-light',
    'denim',
    'tory-blue',
    'appdotnet',
    'facebook',
    'googleplus',
    'linkedin',
    'pinterest',
    'twitter',
    'outer-space',
    'outer-space-light',
    'outer-space-ultra-light',
    'shuttle-gray',
    'nevada',
    'geyser',
    'mystic',
    'aqua-haze',
    'white',
    'shamrock',
    'saffron',
    'torch-red',
  ]),
  size: PropTypes.oneOf(['small', 'large']),
};

export default Icon;
export AddMediaIcon from './Icons/AddMediaIcon';
export AnalyticsIcon from './Icons/AnalyticsIcon';
