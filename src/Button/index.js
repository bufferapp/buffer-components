import React, { PropTypes } from 'react';
import styles from './Button.css';

const Button = (props) => {
  const classNames = [styles.Button];
  if (props.state) {
    classNames.push(styles[`Button--state-${props.state}`]);
  }
  if (props.type) {
    classNames.push(styles[`Button--type-${props.type}`]);
  }
  return (
    <button className={classNames.join(' ')} {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  state: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
