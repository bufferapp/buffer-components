import React, { PropTypes } from 'react';
import styles from './style.css';
import Overlay from '../Overlay';

const Popover = ({
  children,
  onOverlayClick,
  transparentOverlay,
}) =>
  <span>
    <div className={styles.popover}>
      {children}
    </div>
    <Overlay
      onClick={onOverlayClick}
      transparent={transparentOverlay}
    />
  </span>;

Popover.propTypes = {
  children: PropTypes.node,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
};

export default Popover;
