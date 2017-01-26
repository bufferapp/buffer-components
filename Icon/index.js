import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Icon = ({ type, size, className }) => {
  const classes = classNames(styles, 'icon', {
    small: size === 'small',
    large: size === 'large',
  });
  return <i className={`${classes} ${className} bi bi-${type}`}></i>;
};


Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.string.isRequired,
};

export default Icon;
