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
    lochmara: color === 'lochmara',
    lochmaraLight: color === 'lochmaraLight',
    lochmaraUltraLight: color === 'lochmaraUltraLight',
    lochmaraHover: color === 'lochmaraHover',
    toryBlue: color === 'toryBlue',
    appdotnet: color === 'appdotnet',
    facebook: color === 'facebook',
    googleplus: color === 'googleplus',
    linkedin: color === 'linkedin',
    pinterest: color === 'pinterest',
    twitter: color === 'twitter',
    outerSpace: color === 'outerSpace',
    outerSpaceLight: color === 'outerSpaceLight',
    outerSpaceUltraLight: color === 'outerSpaceUltraLight',
    shuttleGray: color === 'shuttleGray',
    nevada: color === 'nevada',
    geyser: color === 'geyser',
    mystic: color === 'mystic',
    aquaHaze: color === 'aquaHaze',
    white: color === 'white',
    shamrock: color === 'shamrock',
    saffron: color === 'saffron',
    red: color === 'red',
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
      <g className={color}>
        {children}
      </g>
    </svg>
  );
};

Icon.defaultProps = {
  color: 'shuttleGray',
};

Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'lochmara',
    'lochmaraLight',
    'lochmaraUltraLight',
    'lochmaraHover',
    'toryBlue',
    'appdotnet',
    'facebook',
    'googleplus',
    'linkedin',
    'pinterest',
    'twitter',
    'outerSpace',
    'outerSpaceLight',
    'outerSpaceUltraLight',
    'shuttleGray',
    'nevada',
    'geyser',
    'mystic',
    'aquaHaze',
    'white',
    'shamrock',
    'saffron',
    'red',
  ]),
  size: PropTypes.oneOf(['small', 'large']),
};

export default Icon;
