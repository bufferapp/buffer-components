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
  hidden,
}) =>
  (!hidden &&
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
            // top: '50%',
            // left: '50%',
            // marginLeft: '-25%',
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
    </div>
  );

Popover.propTypes = {
  children: PropTypes.node,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
  hidden: PropTypes.bool,
};

Popover.defaultProps = {
  hidden: false,
};

export default Popover;
