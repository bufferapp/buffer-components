import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';


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
  const classes = classNames(styles, undefined, {
    circle: border === 'circle',
    rounded: border === 'rounded',
    verticalAlignBottom,
  });

  const inlineStyle = {
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    objectFit,
  };

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      style={inlineStyle}
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
