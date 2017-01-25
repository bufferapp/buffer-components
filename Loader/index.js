import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import Icon from '../Icon';
import styles from './style.css';

const Loader = (props) => {
  const classes = classNames(styles, 'loader');
  return (
    <div className={classes} {...cleanProps(props, Loader.propTypes)}>
      <div className={styles.icon}>
        <Icon type={'buffer-top'} className={styles.top} />
        <Icon type={'buffer-middle'} className={styles.middle} />
        <Icon type={'buffer-bottom'} className={styles.bottom} />
      </div>
      <p className={styles.content}>{props.children}</p>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
