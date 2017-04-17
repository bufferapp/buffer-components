import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Button = ({
  borderless,
  children,
  disabled,
  fillContainer,
  large,
  onClick,
  secondary,
  small,
  tertiary,
  warning,
  noStyle,
}) => {
  const classes = classNames(styles, {
    button: !noStyle,
    borderless,
    large,
    secondary,
    small,
    tertiary,
    warning,
    'fill-container': fillContainer,
    'no-style': noStyle,
  });
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  fillContainer: PropTypes.bool,
  large: PropTypes.bool,
  noStyle: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;
