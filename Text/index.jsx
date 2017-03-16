import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Text = ({ children, size, weight, color }) => {
  const classes = classNames(styles, 'text', {
    extraSmall: size === 'extra-small',
    large: size === 'large',
    small: size === 'small',
    bold: weight === 'bold',
    thin: weight === 'thin',
    black: color === 'black',
    blue: color === 'blue',
    gray: color === 'gray',
    red: color === 'red',
    white: color === 'white',
  });
  return (
    <span className={classes}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['extra-small', 'large', 'small']),
  weight: PropTypes.oneOf(['bold', 'thin']),
  color: PropTypes.oneOf(['black', 'blue', 'gray', 'red', 'white']),
};

export default Text;
