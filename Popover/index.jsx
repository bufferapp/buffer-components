import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Overlay from '../Overlay';
import { classNames } from '../lib/utils';

const Popover = ({
  children,
  left,
  top,
  bottom,
  right,
  onOverlayClick,
  transparentOverlay,
}) =>
  <span>
    <div
      className={classNames(
        styles,
        'popover',
        {
          center: !(left || top || bottom || right),
        },
      )}
      style={{
        left,
        top,
        bottom,
        right,
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
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
};

export default Popover;
