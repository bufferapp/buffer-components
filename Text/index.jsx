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
  fontWeight,
  fontWeightBold,
  fontWeightThin,
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
    bold: {
      fontWeight: fontWeightBold,
    },
    thin: {
      fontWeight: fontWeightThin,
    },
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
    bold: weight === 'bold',
    thin: weight === 'thin',
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
  weight: PropTypes.oneOf(['bold', 'thin']),
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.defaultProps = {
  color: 'shuttleGray',
};

export default Text;
