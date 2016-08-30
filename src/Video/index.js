import React, { PropTypes } from 'react';

const Video = ({ sources, controls, width, height }) =>
  <video
    controls={controls}
    width={width}
    height={height}
  >
    {sources.map((source, i) =>
      <source
        key={i}
        src={source.src}
        type={`video/${source.type}`}
      />)
    }
    "Your Browser Does Not Support Video"
  </video>;

Video.propTypes = {
  controls: PropTypes.bool,
  height: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  width: PropTypes.string,
};

Video.defaultProps = {
  controls: true,
  sources: [],
};

export default Video;
