import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Icon = ({
  children,
  size,
}) => {
  const classes = classNames(styles, 'icon', {
    large: size === 'large',
    small: size === 'small',
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
      {children}
    </svg>
  );
};


Icon.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Icon;
export AddMediaIcon from './Icons/AddMediaIcon';
