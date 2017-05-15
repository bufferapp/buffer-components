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
  fillContainer,
  large,
  onClick,
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
    disabled: {
      opacity: 0.3,
    },
    borderless: {
      color: curiousBlue,
      backgroundColor: transparent,
      border: 0,
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
    small: {
      padding: '0.25rem 2rem',
    },
    tertiary: {
      color: outerSpace,
      backgroundColor: transparent,
      borderColor: geyser,
    },
    warning: {
      color: outerSpace,
      backgroundColor: transparent,
      borderColor: torchRed,
    },
    fillContainer: {
      width: '100%',
    },
    noStyle: {
      border: 'none',
      background: 'none',
      padding: 0,
    },
  }, {
    disabled,
    borderless,
    large,
    secondary,
    small,
    tertiary,
    warning,
    fillContainer,
    noStyle,
  });
  return (
    <button
      style={style}
      onClick={onClick}
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
  large: PropTypes.bool,
  noStyle: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;
