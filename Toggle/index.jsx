import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ enabled }) => <div>{ enabled ? 'Enabled' : 'Disabled' }</div>;

Toggle.propTypes = {
  enabled: PropTypes.bool,
};

Toggle.defaultProps = {
  enabled: false,
};

export default Toggle;
