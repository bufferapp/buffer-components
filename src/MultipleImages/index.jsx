import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  calculateStyles,
} from '../lib/utils';
import {
  borderRadius,
} from '../style/border';
import Image from '../Image';

const getImageWrapperHeight = (arrayOfImageUrls) => {
  if (arrayOfImageUrls.length <= 2) {
    return '100%';
  }
  return '50%';
};

const MultipleImages = ({ border,
  height,
  urls,
  width,
}) => {
  const multipleImagesStyle = calculateStyles({
    default: {
      height,
      width,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
    rounded: {
      borderRadius,
    },
  }, {
    rounded: border === 'rounded',
  });
  const imageStyle = {
    flexGrow: 1,
    flexBasis: '50%',
    height: getImageWrapperHeight(urls),
  };

  return (
    <div style={multipleImagesStyle}>
      {
        urls.map(url =>
          <div
            style={imageStyle}
            height={height}
            key={uuid()}
          >
            <Image
              height={'100%'}
              objectFit={'cover'}
              src={url}
              verticalAlignBottom
              width={'100%'}
              pad
            />
          </div>,
        )
      }
    </div>
  );
};

MultipleImages.defaultProps = {
  height: '100%',
  width: '100%',
};

MultipleImages.propTypes = {
  border: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  urls: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default MultipleImages;
