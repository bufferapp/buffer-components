import React, { PropTypes } from 'react';
import styles from './style.css';

const Overlay = ({ onClick, transparent }) =>
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={styles.overlay}
    onClick={onClick}
    style={{
      opacity: transparent ? 0 : 1,
    }}
  />;

Overlay.propTypes = {
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
};

export default Overlay;
