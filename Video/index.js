import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';


const Video = ({ sources, controls, width, height, border }) => {
  const classes = classNames(styles, undefined, {
    rounded: border === 'rounded',
  });
  return (
    <video
      className={classes}
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
  border: PropTypes.oneOf(['rounded']),
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
