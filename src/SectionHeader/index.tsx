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

const SectionHeader = ({
  children
}: any) => (
  // @ts-expect-error TS(2322): Type '{ display: string; paddingTop: string; paddi... Remove this comment to see the full error message
  <div style={sectionHeaderStyle}>
    {children}
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
