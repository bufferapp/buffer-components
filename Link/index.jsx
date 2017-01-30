import React, { PropTypes } from 'react';
import styles from './style.css';

const Link = ({ children, href }) => <a className={styles.link} href={href}>{children}</a>;

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
