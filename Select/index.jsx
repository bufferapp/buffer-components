import React, { PropTypes } from 'react';
import style from './style.css';
import ArrowDownIcon from '../Icon/Icons/ArrowDownIcon';

const Select = ({ options }) => (
  <div className={style.selectWrapper}>
    <select className={style.select}>
      {
        options.map(option =>
          <option key={option.toString()}>
            {option}
          </option>,
          )
      }
    </select>
    <span className={style.icon}>
      <ArrowDownIcon />
    </span>
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
