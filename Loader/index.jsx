import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import Icon from '../Icon';
import Text from '../Text';
import styles from './style.css';

const Loader = ({ children }) => {
  const classes = classNames(styles, 'loader');
  return (
    <div className={classes}>
      <div className={styles.icon}>
        <Icon type={'buffer-top'} className={styles.top} />
        <Icon type={'buffer-middle'} className={styles.middle} />
        <Icon type={'buffer-bottom'} className={styles.bottom} />
      </div>
      <Text>{children}</Text>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
