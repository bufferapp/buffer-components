import React, { PropTypes } from 'react';

const Image = ({ src, alt, width, height }) =>
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
  />;

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Image.defaultProps = {
  alt: 'Image',
};

export default Image;
