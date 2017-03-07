import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Text = ({ children, size, weight, color }) => {
  const classes = classNames(styles, 'text', {
    extraSmall: size === 'extra-small',
    small: size === 'small',
    large: size === 'large',
    thin: weight === 'thin',
    bold: weight === 'bold',
    white: color === 'white',
    gray: color === 'gray',
    torchRed: color === 'torchRed',
    black: color === 'black',
    blue: color === 'blue',
  });
  return (
    <span className={classes}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'small', 'extra-small']),
  weight: PropTypes.oneOf(['bold', 'thin']),
  color: PropTypes.oneOf(['white', 'gray', 'torchRed', 'black', 'blue']),
};

export default Text;
