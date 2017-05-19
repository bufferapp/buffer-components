import React from 'react';
import PropTypes from 'prop-types';
import {
  mystic,
} from '../style/color';
import {
  borderWidth,
} from '../style/border';

const sectionHeaderStyle = {
  display: 'flex',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  flexDirection: 'row',
  alignItems: 'center',
  borderBottom: `${borderWidth} solid ${mystic}`,
};

const SectionHeader = ({ children }) => (
  <div style={sectionHeaderStyle}>
    {children}
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
