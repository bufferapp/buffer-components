import React, { PropTypes } from 'react';
import styles from './style.css';

const Overlay = ({ onClick }) => <div className={styles.overlay} onClick={onClick} />;

Overlay.propTypes = {
  onClick: PropTypes.func,
};

export default Overlay;
