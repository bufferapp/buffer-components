import React from 'react';
import PropTypes from 'prop-types';
import { BufferTopIcon, BufferMiddleIcon, BufferBottomIcon } from '../Icon/Icons';
import Text from '../Text';
import styles from './style.css';

const renderText = (children) => {
  if (children) {
    return (
      <Text>{children}</Text>
    );
  }
};

const Loader = ({ children }) =>
  <div className={styles.loader}>
    <div className={styles.icon}>
      <div className={styles.top}>
        <BufferTopIcon />
      </div>
      <div className={styles.middle}>
        <BufferMiddleIcon />
      </div>
      <div className={styles.bottom}>
        <BufferBottomIcon />
      </div>
    </div>
    { renderText(children) }
  </div>;

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
