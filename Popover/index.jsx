import React, { PropTypes } from 'react';
import styles from './style.css';
import Overlay from '../Overlay';

const Popover = ({
  children,
  left,
  onOverlayClick,
  transparentOverlay,
}) =>
  <span>
    <div
      className={styles.popover}
      style={{
        left,
      }}
    >
      {children}
    </div>
    <Overlay
      onClick={onOverlayClick}
      transparent={transparentOverlay}
    />
  </span>;

Popover.propTypes = {
  children: PropTypes.node,
  left: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
};

export default Popover;
