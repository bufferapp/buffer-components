import React from 'react';

// generate array of numbers (inclusive)
const genArray = (start, end) => [...Array(end + 1).keys()].slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

const InputTime = () =>
  <div>
    <select>
      {genArray(1, 12).map(hour =>
        <option key={hour} value={hour}>{leftPadTimeUnit(hour)}</option>)}
    </select>
    <select>
      {genArray(0, 60).map(min =>
        <option key={min} value={min}>{leftPadTimeUnit(min)}</option>)}
    </select>
    <select>
      <option value="am">am</option>
      <option value="pm">pm</option>
    </select>
  </div>;

export default InputTime;
