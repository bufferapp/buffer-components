import React, { PropTypes } from 'react';
import uuid from 'uuid';
import styles from './style.css';
import Image from '../Image';

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
            key={uuid()}
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
