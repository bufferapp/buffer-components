import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './style.css';

const Loader = (props) => {
  const classes = classNames(styles, 'loader');
  return (
    <div className={classes} {...cleanProps(props, Loader.propTypes)}>
      <div className={styles.icon}>
        <i className={`bi bi-buffer-top ${styles.top}`}></i>
        <i className={`bi bi-buffer-middle ${styles.middle}`}></i>
        <i className={`bi bi-buffer-bottom ${styles.bottom}`}></i>
      </div>
      <p className={styles.content}>{props.children}</p>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
