import React, { PropTypes } from 'react';
import uuid from 'uuid';
import styles from './style.css';
import Image from '../Image';

const getImageWrapperHeight = (arrayOfImageUrls) => {
  if (arrayOfImageUrls.length <= 2) {
    return { height: '100%' };
  }
};

const MultipleImages = ({ height,
  urls,
  width,
}) => {
  const inlineStyle = {
    height,
    width,
  };

  return (
    <div className={styles.multipleImages} style={inlineStyle}>
      {
        urls.map(url =>
          <div
            className={styles.imageWrapper}
            height={height}
            key={uuid()}
            style={getImageWrapperHeight(urls)}
          >
            <Image
              height={'100%'}
              objectFit={'cover'}
              src={url}
              verticalAlignBottom
              width={'100%'}
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
