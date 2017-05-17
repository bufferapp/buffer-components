import React, { PropTypes } from 'react';
import style from './style.css';

const SectionHeader = ({ children }) => (
  <div className={style.sectionHeader}>
    {children}
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
