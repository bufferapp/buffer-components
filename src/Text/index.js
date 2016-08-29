import React, { PropTypes } from 'react';

const Text = ({ children }) => <span>{children}</span>;

Text.propTypes = {
  children: PropTypes.string,
};

export default Text;
