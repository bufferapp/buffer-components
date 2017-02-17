import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Link = ({
  children,
  href,
  unstyled
}) => {
  const classes = classNames(styles, 'link', {
    unstyled,
  });

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  unstyled: PropTypes.bool,
};

export default Link;
