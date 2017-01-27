import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';


const Image = ({ src, alt, width, height, border }) => {
  const classes = classNames(styles, undefined, {
    circle: border === 'circle',
    rounded: border === 'rounded',
  });

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
    />
  );
};


Image.propTypes = {
  alt: PropTypes.string,
  border: PropTypes.oneOf(['circle', 'rounded']),
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Image.defaultProps = {
  alt: 'Image',
};

export default Image;
