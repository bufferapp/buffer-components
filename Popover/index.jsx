import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import {
  calculateStyles,
} from '../lib/utils';
import {
  modal,
} from '../style/zIndex';

const popoverWrapperStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
};

const Popover = ({
  children,
  left,
  top,
  bottom,
  right,
  onOverlayClick,
  transparentOverlay,
}) => (
  <div style={popoverWrapperStyle}>
    <div
      style={calculateStyles({
        default: {
          position: 'absolute',
          left,
          top,
          bottom,
          right,
          zIndex: modal,
        },
      })}
    >
      {children}
    </div>
    <Overlay
      onClick={onOverlayClick}
      transparent={transparentOverlay}
    />
  </div>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
};

export default Popover;
