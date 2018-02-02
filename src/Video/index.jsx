/* eslint jsx-a11y/media-has-caption: 0 */
/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import { borderRadius } from '../style/border';


const Video = ({
  sources, controls, width, height, border,
}) => {
  const style = calculateStyles({
    default: {},
    rounded: {
      borderRadius,
    },
  }, {
    rounded: border === 'rounded',
  });
  return (
    <video
      style={style}
      controls={controls}
      width={width}
      height={height}
    >
      {sources.map((source, i) =>
        (<source
          key={i}
          src={source.src}
          type={`video/${source.type}`}
        />))
      }
      {'Your Browser Does Not Support Video'}
    </video>
  );
};

Video.propTypes = {
  border: PropTypes.oneOf(['rounded']),
  controls: PropTypes.bool,
  height: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })),
  width: PropTypes.string,
};

Video.defaultProps = {
  controls: true,
  sources: [],
};

export default Video;
