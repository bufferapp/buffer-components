import React, { PropTypes } from 'react';
import styles from './style.css';

const Popover = ({ children }) =>
  <div className={styles.popover}>
    {children}
  </div>;

Popover.propTypes = {
  children: PropTypes.node,
};

export default Popover;
