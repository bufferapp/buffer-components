import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module 'uuid' or its corresponding typ... Remove this comment to see the full error message
import uuid from 'uuid';
import {
  calculateStyles,
} from '../lib/utils';
import Image from '../Image';

const getImageWrapperHeight = (arrayOfImageUrls: any) => {
  if (arrayOfImageUrls.length <= 2) {
    return '100%';
  }
  return '50%';
};

const MultipleImages = ({
  border,
  height,
  urls,
  width
}: any) => {
  const multipleImagesStyle = calculateStyles({
    default: {
      height,
      width,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflow: 'hidden',
      border: '1px solid #B8B8B8',
    },
    rounded: {
      borderRadius: '4px',
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
        urls.map((url: any) => <div
          style={imageStyle}
          // @ts-expect-error TS(2322): Type '{ children: Element; style: { flexGrow: numb... Remove this comment to see the full error message
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
