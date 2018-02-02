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

const NavBar = ({ title, subtitle }) => (
  <div
    style={navbarStyle}
  >
    <span
      style={appIconStyle}
    >
      <BufferIcon />
    </span>
    <Text weight="bold">{title}</Text>
    <Text>{subtitle ? `\u00a0${subtitle}` : ''}</Text>
  </div>
);

NavBar.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Buffer',
};

export default NavBar;
