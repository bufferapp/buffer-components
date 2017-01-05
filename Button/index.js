import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './button.css';

const Button = (props) => {
  const classes = classNames(styles, {
    'button-borderless': props.borderless,
    'button-large': props.large,
    'button-secondary': props.secondary,
    'button-small': props.small,
    'button-tertiary': props.tertiary,
    'button-warning': props.warning,
  });
  return (
    <button className={classes} {...cleanProps(props, Button.propTypes)}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  borderless: PropTypes.bool,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;
