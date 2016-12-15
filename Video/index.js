import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const Video = ({ borderRadius, sources, controls, width, height }) => {
  const styles = reactCSS({
    default: {
      Video: {
        borderRadius,
      },
    },
  });
  return (
    <video
      style={styles.Video}
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
    </video>
  );
};

Video.propTypes = {
  borderRadius: PropTypes.number,
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
  borderRadius: 3,
  controls: true,
  sources: [],
};

export default Video;
