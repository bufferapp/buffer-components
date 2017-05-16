import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import {
  outerSpaceUltraDark,
} from '../style/color';
import {
  overlay,
} from '../style/zIndex';

const Overlay = ({ onClick, transparent }) =>
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={styles.overlay}
    onClick={onClick}
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: outerSpaceUltraDark,
      zIndex: overlay,
      opacity: transparent ? 0 : 1,
    }}
  />;

Overlay.propTypes = {
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
};

export default Overlay;
