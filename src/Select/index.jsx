import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import colors, {
  transparent,
  mystic,
} from '../style/color';
import {
  fontSizeSmall,
} from '../style/font';
import {
  borderRadius,
  borderWidth,
  borderWidthNumber,
} from '../style/border';
import ArrowDownIcon from '../Icon/Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icon/Icons/ArrowUpIcon';

const height = 2;

const defaultIconStyle = {
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  pointerEvents: 'none',
};

const selectWrapperStyle = {
  position: 'relative',
};

const RangeIcon = () => (
  <div
    style={{
      position: 'absolute',
      top: borderWidth,
      right: borderWidth,
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'none',
      height: `${height - (borderWidthNumber * 2)}rem`,
      backgroundColor: '#fcfcfc',
      borderLeft: `${borderWidth} solid ${mystic}`,
      borderRadiusTopRight: borderRadius,
      borderRadiusBottomRight: borderRadius,
      width: '1rem',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        height: `${(height / 2) - (borderWidthNumber)}rem`,
        fontFamily: 'none',
      }}
    >
      <ArrowUpIcon size="small" />
    </div>
    <div
      style={{
        height: `${(height / 2) - (borderWidthNumber)}rem`,
        fontFamily: 'none',
      }}
    >
      <ArrowDownIcon size="small" />
    </div>
  </div>);

const DefaultIcon = () => (
  <div style={defaultIconStyle}>
    <ArrowDownIcon />
  </div>
);

/* eslint-disable react/prop-types */
const SelectIcon = ({ noStyle, rangeSelector }) => {
  if (noStyle) {
    return null;
  } else if (rangeSelector) {
    return (
      <RangeIcon />
    );
  }
  return (
    <DefaultIcon />
  );
};
/* eslint-enable react/prop-types */

const Select = ({
  options,
  onChange,
  disabled,
  noStyle,
  label,
  value,
  centerText,
  rangeSelector,
  color,
  hovered,
}) => {
  const selectStyle = calculateStyles({
    default: {
      height: `${height}rem`,
      padding: '0 1.5rem 0 0.5rem',
      fontSize: fontSizeSmall,
      background: transparent,
      border: `${borderWidth} solid ${mystic}`,
      borderRadius,
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '100%',
      color: colors[color],
    },
    noStyle: {
      height: 'auto',
      border: 0,
      background: 'transparent',
      margin: 0,
      padding: 0,
    },
    centerText: {
      textAlignLast: 'center',
      paddingLeft: 0,
    },
    rangeSelector: {
      paddingRight: '1rem',
    },
    hovered: {
      cursor: 'pointer',
    },
  }, {
    noStyle,
    centerText,
    rangeSelector,
    hovered,
  });

  return (
    <div style={selectWrapperStyle}>
      <select
        style={selectStyle}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
        value={value}
      >
        {
          options.map(option => (
            <option key={option.value.toString()} value={option.value}>
              {option.name}
            </option>))
        }
      </select>
      <SelectIcon
        noStyle={noStyle}
        rangeSelector={rangeSelector}
      />
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  noStyle: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  centerText: PropTypes.bool,
  rangeSelector: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  hovered: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  disabled: false,
  noStyle: false,
  label: null,
  value: undefined,
  centerText: false,
  rangeSelector: false,
  color: 'shuttleGray',
};

export default Select;
