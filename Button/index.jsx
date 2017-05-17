import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import {
  fontFamily,
  fontSize,
  fontSizeSmall,
  fontWeight,
} from '../style/font';
import {
  white,
  curiousBlue,
  geyser,
  outerSpace,
  transparent,
  torchRed,
  denim,
} from '../style/color';
import {
  borderWidth,
} from '../style/border';
import {
  transitionAnimationTime,
  transitionAnimationType,
} from '../style/animation';

const Button = ({
  borderless,
  children,
  disabled,
  focused,
  hovered,
  fillContainer,
  large,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  secondary,
  small,
  tertiary,
  warning,
  noStyle,
}) => {
  const style = calculateStyles({
    default: {
      display: 'inline-block',
      margin: '0',
      padding: '0.5rem 2rem',
      fontFamily,
      fontSize: fontSizeSmall,
      fontWeight,
      color: white,
      backgroundColor: curiousBlue,
      border: `${borderWidth} solid ${transparent}`,
      borderRadius: '2rem',
      cursor: 'pointer',
      outline: 'none',
      transition: `background-color ${transitionAnimationTime} ${transitionAnimationType}`,
    },
    hovered: {
      color: white,
      textDecoration: 'none',
      backgroundColor: denim,
    },
    disabled: {
      opacity: 0.3,
    },
    borderless: {
      color: curiousBlue,
      backgroundColor: transparent,
      border: 0,
    },
    borderlessHovered: {
      color: denim,
      backgroundColor: transparent,
    },
    large: {
      padding: '0.5rem 2rem',
      fontSize,
    },
    secondary: {
      color: curiousBlue,
      backgroundColor: transparent,
      borderColor: curiousBlue,
    },
    secondaryHovered: {
      color: denim,
      backgroundColor: transparent,
      borderColor: denim,
    },
    small: {
      padding: '0.25rem 2rem',
    },
    tertiary: {
      color: outerSpace,
      backgroundColor: transparent,
      borderColor: geyser,
    },
    tertiaryHovered: {
      color: outerSpace,
      backgroundColor: transparent,
    },
    warning: {
      color: outerSpace,
      backgroundColor: transparent,
      borderColor: torchRed,
    },
    warningHovered: {
      color: white,
      backgroundColor: torchRed,
    },
    fillContainer: {
      width: '100%',
    },
    noStyle: {
      border: 'none',
      background: 'none',
      padding: 0,
    },
    focused: {
      boxShadow: `0 0 0.25rem ${curiousBlue}`,
    },
  }, {
    disabled,
    hovered,
    borderless,
    borderlessHovered: borderless && hovered,
    large,
    secondary,
    secondaryHovered: secondary && hovered,
    small,
    tertiary,
    tertiaryHovered: tertiary && hovered,
    warning,
    warningHovered: warning && hovered,
    fillContainer,
    noStyle,
    focused,
  });
  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  fillContainer: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  large: PropTypes.bool,
  noStyle: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;
