import React, { PropTypes } from 'react';
import uuid from 'uuid';
import { classNames } from '../lib/utils';
import Image from '../Image';
import styles from './style.css';

const getImageWrapperHeight = (arrayOfImageUrls) => {
  if (arrayOfImageUrls.length <= 2) {
    return { height: '100%' };
  }
};

const MultipleImages = ({ border,
  height,
  urls,
  width,
}) => {
  const classes = classNames(styles, 'multipleImages', {
    rounded: border === 'rounded',
  });

  const inlineStyle = {
    height,
    width,
  };

  return (
    <div className={classes} style={inlineStyle}>
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
