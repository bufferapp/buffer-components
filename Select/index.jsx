import React, { PropTypes } from 'react';
import style from './style.css';

const Select = ({ options }) => (
  <select className={style.select}>
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
