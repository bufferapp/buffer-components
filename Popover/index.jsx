import React, { PropTypes } from 'react';
import styles from './style.css';
import Overlay from '../Overlay';

const Popover = ({ children }) =>
  <span>
    <div className={styles.popover}>
      {children}
    </div>
    <Overlay />
  </span>;

Popover.propTypes = {
  children: PropTypes.node,
};

export default Popover;
