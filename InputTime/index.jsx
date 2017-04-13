import React, { PropTypes } from 'react';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

const renderAmPm = () =>
  <select>
    <option value="am">am</option>
    <option value="pm">pm</option>
  </select>;

const InputTime = ({
  select24Hours,
}) =>
  <div>
    <select>
      {genArray(select24Hours ? 0 : 1, select24Hours ? 23 : 12).map(hour =>
        <option key={hour} value={hour}>{leftPadTimeUnit(hour)}</option>)}
    </select>
    <select>
      {genArray(0, 59).map(min =>
        <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
    </select>
    { select24Hours ? null : renderAmPm() }
  </div>;

InputTime.propTypes = {
  select24Hours: PropTypes.bool,
};

export default InputTime;
