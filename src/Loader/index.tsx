import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module '@buf... Remove this comment to see the full error message
import { Keyframes, Frame } from '@bufferapp/react-keyframes';
import PropTypes from 'prop-types';
import { BufferTopIcon, BufferMiddleIcon, BufferBottomIcon } from '../Icon/Icons';
import Text from '../Text';

const renderText = (children: any) => {
  if (children) {
    return (
      <Text>{children}</Text>
    );
  }
};

const iconStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '1rem',
  height: '1rem',
  transition: 'all 1000ms ease-in-out',
  opacity: 1,
};

const hiddenIconStyle = {
  ...iconStyle,
  opacity: 0,
};

/* eslint-disable react/prop-types */

const generateKeyFrames = ({
  component,
  delay = 0
}: any) =>
  <Keyframes delay={delay} loop>
    <Frame
      duration={1000}
    >
      <div
        // @ts-expect-error TS(2322): Type '{ opacity: number; position: string; top: nu... Remove this comment to see the full error message
        style={hiddenIconStyle}
      >
        {component}
      </div>
    </Frame>
    <Frame
      duration={1000}
    >
      <div
        // @ts-expect-error TS(2322): Type '{ position: string; top: number; left: numbe... Remove this comment to see the full error message
        style={iconStyle}
      >
        {component}
      </div>
    </Frame>
  </Keyframes>;

/* eslint-enable react/prop-types */

const Loader = ({
  children
}: any) =>
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <div
      style={{
        position: 'relative',
        margin: '0 auto 1rem auto',
        width: '1rem',
        height: '1rem',
      }}
    >
      {generateKeyFrames({
        component: <BufferTopIcon />,
      })}
      {generateKeyFrames({
        component: <BufferMiddleIcon />,
        delay: 250,
      })}
      {generateKeyFrames({
        component: <BufferBottomIcon />,
        delay: 500,
      })}
    </div>
    { renderText(children) }
  </div>;

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
