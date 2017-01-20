import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './style.css';

const Button = (props) => {
  const classes = classNames(styles, {
    borderless: props.borderless,
    large: props.large,
    secondary: props.secondary,
    small: props.small,
    tertiary: props.tertiary,
    warning: props.warning,
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
