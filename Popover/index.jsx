import React, { PropTypes } from 'react';
import styles from './style.css';
import Overlay from '../Overlay';

const Popover = ({ children, onOverlayClick }) =>
  <span>
    <div className={styles.popover}>
      {children}
    </div>
    <Overlay onClick={onOverlayClick} />
  </span>;

Popover.propTypes = {
  children: PropTypes.node,
  onOverlayClick: PropTypes.func,
};

export default Popover;
