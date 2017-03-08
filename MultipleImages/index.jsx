import React, { PropTypes } from 'react';
import uuid from 'uuid';
import styles from './style.css';
import Image from '../Image';

const getUrlAmount = (urls) => {
  if (urls.length <= 2) {
    return { height: '100%' };
  }
};

const MultipleImages = ({ urls,
  width,
  height,
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
            style={getUrlAmount(urls)}
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
  height: '20rem',
  width: '20rem',
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
