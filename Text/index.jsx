import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  fontFamily,
  fontSizeExtraExtraSmall,
  fontSizeExtraSmall,
  fontSizeSmall,
  fontSize,
  fontSizeLarge,
  fontSizeExtraLarge,
  fontSizeExtraExtraLarge,
  fontSizeHuge,
  fontWeightThin,
  fontWeightExtraLight,
  fontWeightLight,
  fontWeight,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  fontWeightExtraBold,
  fontWeightBlack,
} from '../style/font';
import colors from '../style/color';

const Text = ({ children, size, weight, color }) => {
  const style = calculateStyles({
    default: {
      fontFamily,
      fontSize,
      fontWeight,
      color: colors[color],
    },
    // Weights
    extraLight: {
      fontWeight: fontWeightExtraLight,
    },
    light: {
      fontWeight: fontWeightLight,
    },
    thin: {
      fontWeight: fontWeightThin,
    },
    medium: {
      fontWeight: fontWeightMedium,
    },
    semiBold: {
      fontWeight: fontWeightSemiBold,
    },
    bold: {
      fontWeight: fontWeightBold,
    },
    extraBold: {
      fontWeight: fontWeightExtraBold,
    },
    black: {
      fontWeight: fontWeightBlack,
    },
    // Sizes
    extraExtraSmall: {
      fontSize: fontSizeExtraExtraSmall,
    },
    extraSmall: {
      fontSize: fontSizeExtraSmall,
    },
    small: {
      fontSize: fontSizeSmall,
    },
    large: {
      fontSize: fontSizeLarge,
    },
    extraLarge: {
      fontSize: fontSizeExtraLarge,
    },
    extraExtraLarge: {
      fontSize: fontSizeExtraExtraLarge,
    },
    huge: {
      fontSize: fontSizeHuge,
    },
  }, {
    // Weights
    extraLight: weight === 'extra-light',
    light: weight === 'light',
    thin: weight === 'thin',
    medium: weight === 'medium',
    semiBold: weight === 'semi-bold',
    bold: weight === 'bold',
    extraBold: weight === 'extra-bold',
    black: weight === 'black',
    // Sizes
    extraExtraSmall: size === 'extra-extra-small',
    extraSmall: size === 'extra-small',
    small: size === 'small',
    large: size === 'large',
    extraLarge: size === 'extra-large',
    extraExtraLarge: size === 'extra-extra-large',
    huge: size === 'huge',
  });
  return (
    <span style={style}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['extra-extra-small', 'extra-small', 'small', 'large', 'extra-large', 'extra-extra-large', 'huge']),
  weight: PropTypes.oneOf(['extra-light', 'light', 'thin', 'medium', 'semi-bold', 'bold', 'extra-bold', 'black']),
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.defaultProps = {
  color: 'shuttleGray',
};

export default Text;
