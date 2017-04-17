import React from 'react';
import PropTypes from 'prop-types';
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
    appdotnet: color === 'appdotnet',
    aquaHaze: color === 'aquaHaze',
    black: color === 'black',
    curiousBlue: color === 'curiousBlue',
    curiousBlueLight: color === 'curiousBlueLight',
    curiousBlueUltraLight: color === 'curiousBlueUltraLight',
    denim: color === 'denim',
    facebook: color === 'facebook',
    geyser: color === 'geyser',
    googleplus: color === 'googleplus',
    linkedin: color === 'linkedin',
    mystic: color === 'mystic',
    nevada: color === 'nevada',
    outerSpace: color === 'outerSpace',
    outerSpaceLight: color === 'outerSpaceLight',
    outerSpaceUltraLight: color === 'outerSpaceUltraLight',
    pinterest: color === 'pinterest',
    saffron: color === 'saffron',
    shamrock: color === 'shamrock',
    shuttleGray: color === 'shuttleGray',
    torchRed: color === 'torchRed',
    toryBlue: color === 'toryBlue',
    twitter: color === 'twitter',
    white: color === 'white',
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
    'appdotnet',
    'aquaHaze',
    'black',
    'curiousBlue',
    'curiousBlueLight',
    'curiousBlueUltraLight',
    'denim',
    'facebook',
    'geyser',
    'googleplus',
    'linkedin',
    'mystic',
    'nevada',
    'outerSpace',
    'outerSpaceLight',
    'outerSpaceUltraLight',
    'pinterest',
    'saffron',
    'shamrock',
    'shuttleGray',
    'toryBlue',
    'torchRed',
    'twitter',
    'white',
  ]),
  size: PropTypes.oneOf(['large', 'small']),
};

export default Icon;
