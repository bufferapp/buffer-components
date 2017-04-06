import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Text = ({ children, size, weight, color }) => {
  const classes = classNames(styles, 'text', {
    black: color === 'black',
    blue: color === 'blue',
    bold: weight === 'bold',
    extraSmall: size === 'extra-small',
    gray: color === 'gray',
    large: size === 'large',
    red: color === 'red',
    small: size === 'small',
    thin: weight === 'thin',
    white: color === 'white',
  });
  return (
    <span className={classes}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['extra-small', 'large', 'mini', 'small']),
  weight: PropTypes.oneOf(['bold', 'thin']),
  color: PropTypes.oneOf(['black', 'blue', 'gray', 'red', 'white']),
};

export default Text;
