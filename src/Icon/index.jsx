import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles, parseColor } from '../lib/utils';
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
      fill: parseColor(color),
    },
    small: {
      width: '0.75rem',
      height: '0.75rem',
    },
    large: {
      width: '2rem',
      height: '2rem',
    },
    customSize: {
      width: size ? (size.width || size.height) : '1rem',
      height: size ? (size.height || size.width) : '1rem',
    },
  }, {
    color,
    small: size === 'small',
    large: size === 'large',
    customSize: size && (size.width || size.height),
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
  color: PropTypes.oneOf(Object.keys(colors)),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'large']),
    PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  ]),
};

export default Icon;
