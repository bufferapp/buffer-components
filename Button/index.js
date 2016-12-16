import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './Button.css';

const Button = (props) => {
  const classes = classNames(styles, 'Button', {
    'Button--state-error': props.error,
    'Button--type-borderless': props.borderless,
    'Button--type-secondary': props.secondary,
    'Button--type-in-app': props.inApp,
    'Button--type-small': props.small,
    'Button--type-tertiary': props.tertiary,
  });
  return (
    <button className={classes} {...cleanProps(props, Button.propTypes)}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
  borderless: PropTypes.bool,
  secondary: PropTypes.bool,
  inApp: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
};

export default Button;
