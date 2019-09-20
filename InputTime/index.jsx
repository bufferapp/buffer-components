import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Text from '../Text';
import { calculateStyles } from '../lib/utils';
import PseudoClassComponent from '../PseudoClassComponent';

// generate array of numbers (inclusive) - IE 11 compatible
const genArray = (start, end) =>
  Array.apply(null, { length: end + 1 }) // eslint-disable-line prefer-spread
  .map(Number.call, Number).slice(start);
const leftPadTimeUnit = timeUnit => (timeUnit < 10 ? `0${timeUnit}` : timeUnit);

/* eslint-disable react/prop-types */
const selectWrapperStyle = ({
  minimal,
  marginLeft = 0,
  marginRight = 0,
}) => calculateStyles({
  default: {
    position: 'relative',
    flex: 1,
    marginLeft,
    marginRight,
  },
  minimal: {
    display: 'flex',
    flexDirection: 'column',
  },
}, {
  minimal,
});

const SelectWrapperStateless = ({
  children,
  minimal,
  marginLeft,
  marginRight,
  hovered,
  focused,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) =>
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onFocus={onFocus}
    onBlur={onBlur}
    style={selectWrapperStyle({
      minimal,
      marginLeft,
      marginRight,
      hovered,
      focused,
    })}
  >
    {children}
  </div>;

class SelectWrapper extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    let hoveredChildren = children;
    // string as children isn't clonable
    if (React.isValidElement(children)) {
      hoveredChildren = React.cloneElement(
        children,
        {
          hovered: this.state.hovered,
          color:
            this.props.minimal &&
            this.state.hovered &&
            !this.state.focused ? 'curiousBlue' : undefined,
        },
      );
    }
    return (
      <SelectWrapperStateless
        {...rest}
        hovered={this.state.hovered}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {hoveredChildren}
      </SelectWrapperStateless>
    );
  }
}

const timeColonWrapperStyle = ({
  minimal,
}) => calculateStyles({
  default: {
    display: 'flex',
    alignItems: 'center',
    flex: 0,
    marginLeft: '0.1rem',
    marginRight: '0.1rem',
  },
  minimal: {
    marginLeft: 0,
    marginRight: 0,
  },
}, {
  minimal,
});

const TimeColonWrapper = ({
  children,
  minimal,
}) =>
  <div
    style={timeColonWrapperStyle({ minimal })}
  >
    {children}
  </div>;

const AmPm = ({
  disabled,
  minimal,
  onChange,
  submitting,
  value,
  fontSize,
}) =>
  <SelectWrapper minimal={minimal}>
    <Select
      disabled={disabled || submitting}
      onChange={e => onChange({
        ...value,
        hours: e.target.value === 'AM'
        ? value.hours - 12
        : value.hours + 12,
      })}
      noStyle={minimal}
      value={value.hours < 12 ? 'AM' : 'PM'}
      options={[{ value: 'AM', name: 'AM' }, { value: 'PM', name: 'PM' }]}
      centerText={minimal}
      rangeSelector={!minimal}
      size={fontSize}
    />
  </SelectWrapper>;

/* eslint-enable react/prop-types */

const displayHour = (hour, select24Hours) => {
  if (select24Hours) {
    return hour;
  } else if (hour === 0) {
    return 12;
  }
  const modHour = hour % 12;
  return modHour === 0 ? 12 : modHour;
};

const generateHours = (select24Hours, value) => {
  const timeArray = genArray(
    select24Hours || value.hours < 12 ? 0 : 12,
    select24Hours || value.hours > 11 ? 23 : 11,
  );
  return timeArray.map((hour) => {
    const displaytime = leftPadTimeUnit(displayHour(hour, select24Hours)).toString();
    return { value: hour, name: displaytime };
  });
};

const generateMinutes = () => (
  genArray(0, 59).map((min) => {
    const displayMin = leftPadTimeUnit(min).toString();
    return { value: min, name: displayMin };
  })
);

const InputTime = ({
  disabled,
  input: {
    value,
    onChange,
  },
  meta: {
    submitting,
  },
  minimal,
  select24Hours,
  displayTimeColon,
  fontSize,
}) => {
  const style = {
    width: '100%',
    display: 'flex',
  };

  if (!value) {
    value = { hours: 0, minutes: 0 };
  }
  return (
    <div style={style}>
      <SelectWrapper minimal={minimal}>
        <Select
          disabled={disabled || submitting}
          onChange={e => onChange({ ...value, hours: parseInt(e.target.value, 10) })}
          value={value.hours}
          options={generateHours(select24Hours, value)}
          label={'Hour'}
          noStyle={minimal}
          centerText={minimal}
          rangeSelector={!minimal}
          size={fontSize}
        />
      </SelectWrapper>
      { displayTimeColon ?
        <TimeColonWrapper
          minimal={minimal}
        >
          <Text size={'small'}>:</Text>
        </TimeColonWrapper>
        : null }
      <SelectWrapper
        minimal={minimal}
        marginLeft={minimal || displayTimeColon ? 0 : '0.25rem'}
        marginRight={!minimal ? '0.25rem' : undefined}
      >
        <Select
          disabled={disabled || submitting}
          onChange={e => onChange({ ...value, minutes: parseInt(e.target.value, 10) })}
          value={value.minutes}
          options={generateMinutes()}
          label={'Minute'}
          noStyle={minimal}
          centerText={minimal}
          rangeSelector={!minimal}
          size={fontSize}
        />
      </SelectWrapper>
      {
        select24Hours ?
        null
        :
        AmPm({ disabled, minimal, onChange, submitting, value, fontSize })
      }
    </div>
  );
};

InputTime.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
      PropTypes.string,
    ]),
  }).isRequired,
  meta: PropTypes.shape({
    submitting: PropTypes.bool,
  }),
  minimal: PropTypes.bool,
  select24Hours: PropTypes.bool,
  displayTimeColon: PropTypes.bool,
  fontSize: PropTypes.oneOf(['small']),
};

InputTime.defaultProps = {
  meta: {},
};

export default InputTime;
