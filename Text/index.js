import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Text = ({ children, size, weight }) => {
  const classes = classNames(styles, 'text', {
    small: size === 'small',
    large: size === 'large',
    thin: weight === 'thin',
    bold: weight === 'bold',
  });
  return (
    <span className={classes}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  weight: PropTypes.oneOf(['bold', 'thin']),
};

export default Text;
