import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import {
  borderRadius,
} from '../style/border';

const Image = ({ src,
  alt,
  width,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  border,
  objectFit,
  verticalAlignBottom,
}) => {
  const style = calculateStyles({
    default: {
      height,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      objectFit,
    },
    circle: {
      borderRadius: '50%',
    },
    rounded: {
      borderRadius,
    },
    verticalAlignBottom: {
      verticalAlign: 'bottom',
    },
  }, {
    circle: border === 'circle',
    rounded: border === 'rounded',
    verticalAlignBottom,
  });

  return (
    <img
      src={src}
      alt={alt}
      style={style}
    />
  );
};


Image.propTypes = {
  alt: PropTypes.string,
  border: PropTypes.oneOf(['circle', 'rounded']),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  objectFit: PropTypes.oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down',
  ]),
  src: PropTypes.string.isRequired,
  verticalAlignBottom: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Image.defaultProps = {
  alt: 'Image',
};

export default Image;
