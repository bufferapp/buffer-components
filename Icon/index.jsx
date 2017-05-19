import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import colors from '../style/color';

const Icon = ({
  children,
  color,
  size,
}) => {
  const style = calculateStyles({
    default: {
      width: '1rem',
      height: '1rem',
    },
    color: {
      fill: colors[color],
    },
    small: {
      width: '0.75rem',
      height: '0.75rem',
    },
    large: {
      width: '2rem',
      height: '2rem',
    },
  }, {
    color,
    small: size === 'small',
    large: size === 'large',
  });
  return (
    <svg
      style={style}
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
