import React from 'react';
import PropTypes from 'prop-types';
import {
  transparent,
  mystic,
} from '../style/color';
import {
  fontSizeSmall,
} from '../style/font';
import {
  borderRadius,
  borderWidth,
} from '../style/border';
import {
  tooltip,
} from '../style/zIndex';
import ArrowDownIcon from '../Icon/Icons/ArrowDownIcon';

const selectWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
};

const selectStyle = {
  zIndex: tooltip,
  height: '2rem',
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem',
  fontSize: fontSizeSmall,
  background: transparent,
  border: `${borderWidth} solid ${mystic}`,
  borderRadius,
  appearance: 'none',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
};

const iconStyle = {
  zIndex: 0,
  display: 'flex',
  marginLeft: '-1.5rem',
  alignItems: 'center',
};

const Select = ({ options }) => (
  <div style={selectWrapperStyle}>
    <select style={selectStyle}>
      {
        options.map(option =>
          <option key={option.toString()}>
            {option}
          </option>,
          )
      }
    </select>
    <span style={iconStyle}>
      <ArrowDownIcon />
    </span>
  </div>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
