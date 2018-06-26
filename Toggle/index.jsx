import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Toggle = ({ enabled }) =>
  <Text>{ enabled ? 'Enabled' : 'Disabled' }</Text>;

Toggle.propTypes = {
  enabled: PropTypes.bool,
};

Toggle.defaultProps = {
  enabled: false,
};

export default Toggle;
