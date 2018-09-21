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
import {
  whiteSpaces,
  normal,
  pre,
  preLine,
  preWrap,
  noWrap,
} from '../style/whiteSpaces';
import colors from '../style/color';

const Text = ({ children, size, weight, color, whitespace }) => {
  const style = calculateStyles({
    default: {
      fontFamily,
      fontSize,
      fontWeight,
      color: colors[color],
      whiteSpace: '',
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
    preWrap: {
      whiteSpace: preWrap,
    },
    normal: {
      whiteSpace: normal,
    },
    preLine: {
      whiteSpace: preLine,
    },
    pre: {
      whiteSpace: pre,
    },
    noWrap: {
      whiteSpace: noWrap,
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
    // White-Space
    preWrap: whitespace === preWrap,
    normal: whitespace === normal,
    preLine: whitespace === preLine,
    pre: whitespace === pre,
    noWrap: whitespace === noWrap,
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
  whitespace: PropTypes.oneOf(whiteSpaces),
};

Text.defaultProps = {
  color: 'shuttleGray',
};

export default Text;
