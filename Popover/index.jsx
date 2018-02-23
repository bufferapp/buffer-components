import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import {
  calculateStyles,
} from '../lib/utils';
import {
  modal,
} from '../style/zIndex';

const Popover = ({
  children,
  left,
  top,
  bottom,
  right,
  onOverlayClick,
  transparentOverlay,
  hidden = false,
  showCloseButton = false,
  onCloseClick,
}) =>
  <span>
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
        center: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        hidden: {
          display: 'none',
        },
      }, {
        center: !(left || top || bottom || right),
        hidden,
      })}
    >
      {showCloseButton && <button onClick={onCloseClick}>X</button>}
      {children}
    </div>
    {!hidden &&
      <Overlay
        onClick={onOverlayClick}
        transparent={transparentOverlay}
        showCloseButton={showCloseButton}
      />}
  </span>;

Popover.propTypes = {
  children: PropTypes.node,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
  hidden: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onCloseClick: PropTypes.func,
};

export default Popover;
