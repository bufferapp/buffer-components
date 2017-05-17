import React, { PropTypes } from 'react';

const Select = ({ options }) => (
  <select>
    {
      options.map(option =>
        <option>
          {option}
        </option>,
        )
    }
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
