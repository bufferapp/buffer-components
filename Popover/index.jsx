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
      }, {
        center: !(left || top || bottom || right),
      })}
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
