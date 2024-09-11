import React from 'react';
import PropTypes from 'prop-types';
import BufferIcon from '../Icon/Icons/BufferIcon';
import Text from '../Text';
import {
  white,
  geyser,
  shuttleGray,
} from '../style/color';
import {
  borderWidth,
} from '../style/border';

const navbarStyle = {
  display: 'flex',
  marginBottom: '2rem',
  padding: '1rem',
  width: '100%',
  backgroundColor: white,
  borderBottom: `${borderWidth} solid ${geyser}`,
  boxSizing: 'border-box',
};

const appIconStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '0.5rem',
  color: shuttleGray,
};

const NavBar = ({
  title,
  subtitle
}: any) =>
  <div
    // @ts-expect-error TS(2322): Type '{ display: string; marginBottom: string; pad... Remove this comment to see the full error message
    style={navbarStyle}
  >
    <span
      style={appIconStyle}
    >
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
