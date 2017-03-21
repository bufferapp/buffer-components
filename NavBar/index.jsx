import React, { PropTypes } from 'react';
import BufferIcon from '../Icon/Icons/BufferIcon';
import Text from '../Text';
import styles from './style.css';

const NavBar = ({ title, subtitle }) =>
  <div className={styles.navbar}>
    <span className={styles['app-icon']}>
      <BufferIcon />
    </span>
    <Text weight={'bold'}>{title}</Text>
    <Text>{subtitle ? `\u00a0${subtitle}` : ''}</Text>
  </div>;

NavBar.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Buffer',
};

export default NavBar;
