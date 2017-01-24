import React, { PropTypes } from 'react';
import Icon from '../Icon';
import Text from '../Text';
import { classNames } from '../lib/utils';
import styles from './style.css';

const NavBar = ({ title, subtitle }) =>
  <div className={classNames(styles, 'navbar')}>
    <div className={classNames(styles, 'app-icon')}>
      <Icon
        type={'buffer'}
        height={15}
        width={15}
      />
    </div>
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
