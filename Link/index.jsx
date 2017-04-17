import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Link = ({
  children,
  href,
  newTab,
  unstyled,
}) => {
  const classes = classNames(styles, 'link', {
    unstyled,
  });

  return (
    <a className={classes} href={href} target={newTab ? '_blank' : '_self'}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  unstyled: PropTypes.bool,
};

export default Link;
