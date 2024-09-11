import React from 'react';
import PropTypes from 'prop-types';
import {
  borderWidth,
} from '../style/border';
import colors from '../style/color';

const Divider = ({
  color,
  marginTop,
  marginBottom
}: any) =>
  <hr
    style={{
      border: 'none',
      height: `${borderWidth}`,
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      background: colors[color],
      width: '100%',
      boxSizing: 'border-box',
      marginTop,
      marginBottom,
    }}
  />;

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