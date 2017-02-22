import React, { PropTypes } from 'react';
import styles from './style.css';

const Overlay = ({ onClick }) =>
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className={styles.overlay} onClick={onClick} />;

Overlay.propTypes = {
  onClick: PropTypes.func,
};

export default Overlay;
