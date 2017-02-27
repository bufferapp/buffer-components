import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
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
          <div className={styles.imageWrapper}>
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
  urls: PropTypes.oneOfType([
    PropTypes.string,
  ]),
};

export default MultipleImages;
