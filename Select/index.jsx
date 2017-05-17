import React, { PropTypes } from 'react';

const Select = ({ children }) => (
  <div>
    {children}
  </div>
);

Select.propTypes = {
  children: PropTypes.node,
};

export default Select;
