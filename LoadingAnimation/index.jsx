import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

const LoadingAnimation = ({
  marginTop,
}) =>
  <Image width="45px" marginTop={marginTop} src="https://s3.amazonaws.com/buffer-publish/images/black-loading-gif-small.gif" />;


LoadingAnimation.propTypes = {
  marginTop: PropTypes.string,
};

LoadingAnimation.defaultProps = {
  marginTop: '5rem',
};

export default LoadingAnimation;
