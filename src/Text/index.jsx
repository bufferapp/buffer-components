import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  fontFamily,
  fontSize,
  fontSizeLarge,
  fontSizeExtraLarge,
  fontSizeMini,
  fontSizeSmall,
  fontSizeExtraSmall,
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

const Text = ({
  children, size, weight, color,
}) => {
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
    extraSmall: {
      fontSize: fontSizeExtraSmall,
    },
    large: {
      fontSize: fontSizeLarge,
    },
    extraLarge: {
      fontSize: fontSizeExtraLarge,
    },
    mini: {
      fontSize: fontSizeMini,
    },
    small: {
      fontSize: fontSizeSmall,
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
    extraSmall: size === 'extra-small',
    large: size === 'large',
    extraLarge: size === 'extra-large',
    mini: size === 'mini',
    small: size === 'small',
  });
  return (
    <span style={style}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['extra-small', 'large', 'extra-large', 'mini', 'small']),
  weight: PropTypes.oneOf(['extra-light', 'light', 'thin', 'medium', 'semi-bold', 'bold', 'extra-bold', 'black']),
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.defaultProps = {
  color: 'shuttleGray',
};

export default Text;
