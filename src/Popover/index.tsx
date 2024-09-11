import React, { useEffect } from 'react';
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
  width,
  height,
  maxHeight,
  onOverlayClick,
  transparentOverlay
}: any) => {
  const popoverWrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: `${width || '100vw'}`,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const onKeyDown = (event: any) => {
    if (event.key === 'Escape') {
      onOverlayClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    // @ts-expect-error TS(2322): Type '{ position: string; top: number; left: numbe... Remove this comment to see the full error message
    <div style={popoverWrapperStyle}>
      <div
        // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
        style={calculateStyles({
          default: {
            position: 'absolute',
            left,
            top,
            bottom,
            right,
            height,
            maxHeight,
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
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  onOverlayClick: PropTypes.func,
  transparentOverlay: PropTypes.bool,
};

export default Popover;
