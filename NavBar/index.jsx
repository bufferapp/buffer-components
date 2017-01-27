import React, { PropTypes } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import styles from './style.css';

const NavBar = ({ title, subtitle }) =>
  <div className={styles.navbar}>
    <Icon type={'buffer'} className={styles['app-icon']} />
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
