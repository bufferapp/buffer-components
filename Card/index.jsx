import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import { fontSizeMini, lineHeight } from '../style/font';
import { outerSpaceLight, white, mystic, geyser, torchRed } from '../style/color';
import { borderWidth, borderRadius } from '../style/border';
import { transitionAnimationTime, transitionAnimationType } from '../style/animation';
import { boxShadowLevelOne, boxShadowLevelTwo } from '../style/dropShadow';

const Card = ({
  children,
  backgroundColor,
  borderColor,
  doublePadding,
  empty,
  faded,
  failed,
  hovered,
  noBorder,
  noPadding,
  onMouseEnter,
  onMouseLeave,
  reducedPadding,
  shadowHeight,
  draggingPlaceholder,
  className,
}) => {
  const style = calculateStyles(
    {
      default: {
        padding: '1.5rem',
        fontSize: fontSizeMini,
        lineHeight,
        backgroundColor: white,
        border: `${borderWidth} solid ${mystic}`,
        borderRadius,
        transition: `box-shadow ${transitionAnimationTime} ${transitionAnimationType}`,
      },
      doublePadding: {
        padding: '3rem',
      },
      empty: {
        borderColor: geyser,
        borderStyle: 'dashed',
      },
      failed: {
        borderColor: torchRed,
      },
      faded: {
        opacity: 0.5,
      },
      noBorder: {
        border: `${borderWidth} solid transparent`,
      },
      noPadding: {
        padding: 0,
      },
      hovered: {
        boxShadow: boxShadowLevelOne,
      },
      backgroundColor: {
        backgroundColor,
      },
      borderColor: {
        borderColor,
      },
      reducedPadding: {
        padding: '1rem',
      },
      shadowHeightOne: {
        boxShadow: boxShadowLevelOne,
      },
      shadowHeightTwo: {
        boxShadow: boxShadowLevelTwo,
      },
      draggingPlaceholder: {
        border: `${borderWidth} dashed ${outerSpaceLight}`,
      },
    },
    {
      doublePadding,
      empty,
      failed,
      faded,
      noBorder,
      noPadding,
      hovered,
      backgroundColor,
      borderColor,
      reducedPadding,
      shadowHeightOne: shadowHeight === 1,
      shadowHeightTwo: shadowHeight === 2,
      draggingPlaceholder,
    },
  );
  return (
    <div style={style} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  doublePadding: PropTypes.bool,
  empty: PropTypes.bool,
  faded: PropTypes.bool,
  failed: PropTypes.bool,
  hovered: PropTypes.bool,
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  reducedPadding: PropTypes.bool,
  shadowHeight: PropTypes.oneOf([0, 1, 2]),
  draggingPlaceholder: PropTypes.bool,
  className: PropTypes.bool,
};

Card.defaultProps = {
  shadowHeight: 0,
  draggingPlaceholder: false,
};

export default Card;
