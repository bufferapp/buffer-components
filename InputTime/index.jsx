import React, { PropTypes } from 'react';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

/* eslint-disable react/prop-types */

const renderAmPm = ({ value, onChange }) =>
  <select
    value={value.hours < 12 ? 'am' : 'pm'}
    onChange={e => onChange({ ...value, hours: e.target.value === 'am' ? value.hours - 12 : value.hours + 12 })}
  >
    <option value="am">am</option>
    <option value="pm">pm</option>
  </select>;

/* eslint-enable react/prop-types */

const InputTime = ({
  select24Hours,
  input: {
    value = { hours: 0, minutes: 0 },
    onChange = () => {},
  },
}) =>
  <div>
    <select
      value={value.hours}
      onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
    >
      {genArray(select24Hours ? 0 : 1, select24Hours ? 23 : 12).map(hour =>
        <option key={select24Hours ? hour + 12 : hour} value={hour}>
          {leftPadTimeUnit(hour)}
        </option>)
      }
    </select>
    <select
      value={value.minutes}
      onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
    >
      {genArray(0, 59).map(min =>
        <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
    </select>
    { select24Hours ? null : renderAmPm({ value, onChange }) }
  </div>;

InputTime.propTypes = {
  select24Hours: PropTypes.bool,
  input: PropTypes.shape({
    value: PropTypes.shape({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }),
  }),
};

InputTime.defaultProps = {
  input: {},
};

export default InputTime;
