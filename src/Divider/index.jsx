import React from 'react';
import PropTypes from 'prop-types';
import {
  borderWidth,
} from '../style/border';
import colors from '../style/color';

const Divider = ({
  color,
  marginTop,
  marginBottom,
}) =>
  (<hr
    style={{
      border: 'none',
      height: `${borderWidth}`,
      background: colors[color],
      width: '100%',
      boxSizing: 'border-box',
      marginTop,
      marginBottom,
    }}
  />);

Divider.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

Divider.defaultProps = {
  color: 'mystic',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
};

export default Divider;
