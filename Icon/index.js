import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Icon = ({ type, size }) => {
  const classes = classNames(styles, 'icon', {
    small: size === 'small',
    large: size === 'large',
  });
  return <i className={`${classes} bi bi-${type}`}></i>;
};


Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Icon;
