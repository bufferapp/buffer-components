import React from 'react';
import PropTypes from 'prop-types';

import { calculateStyles, parseColor } from '../lib/utils';
import { darkPopover } from '../style/color';
import { borderRadius } from '../style/border';
import { tooltip as tooltipZIndex } from '../style/zIndex';

import Text from '../Text';

const arrowHeight = 14;
const arrowWidth = 8;

const ArrowPopover = ({
  children,
  visible,
  offset,
  oneLine,
  position,
  padded,
  color,
  backgroundColor,
  shadow,
  width,
  isTooltip,
  id,
}) => {
  const offsetTop = position === 'above' ? -offset.top : offset.top;
  const style = calculateStyles({
    default: {
      transform: `translate(${arrowWidth + offset.left}px, ${offsetTop}px)`,
      background: parseColor(backgroundColor),
      color: parseColor(color),
      display: 'inline-block',
      borderRadius,
      boxShadow: shadow ? '0 1px 2px 0 rgba(0,0,0,0.50)' : 'none',
      textAlign: 'left',
      position: 'absolute',
      left: '100%',
      zIndex: tooltipZIndex,
    },
    hidden: {
      display: 'none',
    },
    oneLine: {
      whiteSpace: 'nowrap',
    },
    positionAbove: {
      bottom: 0,
    },
    positionBelow: {
      top: 0,
    },
    padded: {
      padding: '.25rem .75rem',
    },
    fixedWidth: {
      width,
    },
  }, {
    hidden: !visible,
    positionAbove: position === 'above',
    positionBelow: position === 'below',
    oneLine: oneLine && width === 'none',
    padded,
    fixedWidth: width !== 'none',
  });

  const arrowStyle = calculateStyles({
    default: {
      position: 'absolute',
      left: -arrowWidth,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: arrowHeight / 2.0,
      borderRightWidth: arrowWidth,
      borderBottomWidth: arrowHeight / 2.0,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: backgroundColor,
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    positionNormal: {
      top: '50%',
      transform: 'translate(0, -50%)',
    },
    positionAbove: {
      top: 'none',
      bottom: '6px',
      transform: 'none',
    },
    positionBelow: {
      top: '6px',
      transform: 'none',
    },
  }, {
    positionNormal: true,
    positionAbove: position === 'above',
    positionBelow: position === 'below',
  });

  const aria = isTooltip ? {
    role: 'tooltip',
    'aria-hidden': !visible,
  } : {};

  return (
    <div style={style} id={id} {...aria}>
      <span style={arrowStyle} />
      <Text color={color} size="small">{children}</Text>
    </div>
  );
};

ArrowPopover.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  oneLine: PropTypes.bool,
  offset: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  position: PropTypes.oneOf(['above', 'below', 'none']),
  padded: PropTypes.bool,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  shadow: PropTypes.bool,
  width: PropTypes.string,
  isTooltip: PropTypes.bool,
  id: PropTypes.string,
};

ArrowPopover.defaultProps = {
  visible: false,
  oneLine: true,
  offset: { left: 0, top: 0 },
  position: 'none',
  padded: true,
  color: 'white',
  backgroundColor: darkPopover,
  shadow: false,
  width: 'none',
  isTooltip: false,
  id: '',
};

export default ArrowPopover;
