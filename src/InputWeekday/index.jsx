import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';

const style = {
  display: 'flex',
};

const scheduleTypes = [
  { name: 'Every Day', value: 'everyday' },
  { name: 'Weekdays', value: 'weekdays' },
  { name: 'Weekends', value: 'weekends' },
  { name: 'Monday', value: 'mon' },
  { name: 'Tuesday', value: 'tue' },
  { name: 'Wednesday', value: 'wed' },
  { name: 'Thursday', value: 'thu' },
  { name: 'Friday', value: 'fri' },
  { name: 'Saturday', value: 'sat' },
  { name: 'Sunday', value: 'sun' },
];

const InputWeekday = ({
  input: {
    value,
    onChange,
  },
  meta: {
    submitting,
  },
}) => (
  <div style={style}>
    <Select
      disabled={submitting}
      onChange={e => onChange({ ...value, day: e.target.value })}
      options={scheduleTypes}
      value={value.day}
      label="choose days"
    />
  </div>
);

InputWeekday.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.shape({
        day: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ]),
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    submitting: PropTypes.bool,
  }),
};

InputWeekday.defaultProps = {
  meta: {},
};

export default InputWeekday;
