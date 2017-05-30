import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  fontFamily,
  fontSize,
  fontSizeLarge,
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
    mini: size === 'mini',
    small: size === 'small',
  });
  return (
    <span style={style}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['extra-small', 'large', 'mini', 'small']),
  weight: PropTypes.oneOf(['bold', 'thin']),
  color: PropTypes.oneOf([
    'appdotnet',
    'aquaHaze',
    'black',
    'curiousBlue',
    'curiousBlueLight',
    'curiousBlueUltraLight',
    'denim',
    'facebook',
    'geyser',
    'googleplus',
    'linkedin',
    'mystic',
    'nevada',
    'outerSpace',
    'outerSpaceLight',
    'outerSpaceUltraLight',
    'pinterest',
    'saffron',
    'shamrock',
    'shuttleGray',
    'toryBlue',
    'torchRed',
    'twitter',
    'white',
  ]),
};

Text.defaultProps = {
  color: 'shuttleGray',
};

export default Text;
