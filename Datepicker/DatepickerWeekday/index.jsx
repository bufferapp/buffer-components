import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';

const WeekDay = ({
  weekdayLenght,
  weekday,
  className,
  localeUtils,
  locale,
}) => {
  const styles = {
    weekday: {
      display: 'table-cell',
      padding: '.5rem 0',
      textAlign: 'center',
      width: '3rem',
    },
  };

  const weekdaysList = localeUtils.formatWeekdayLong(weekday, locale);

  const getWeekdayName = (weekdaysList, weekdayLenght) => {
    switch(weekdayLenght) {
      case 'short':
        return weekdaysList.slice(0, 1);
        break;
      case 'medium':
        return weekdaysList.slice(0, 2);
        break;
      case 'long':
        return weekdaysList;
        break;
      default:
        return weekdaysList;
    }
  };

  return (
    <div style={styles.weekday} title={weekdaysList}>
      <Text color={'lightSlate'} size={'small'}>
        {getWeekdayName(weekdaysList, weekdayLenght)}
      </Text>
    </div>
  );
};

WeekDay.propTypes = {
  weekdayLenght: PropTypes.oneOf(['short', 'medium', 'long']),
};

WeekDay.defaultProps = {
  weekdayLenght: 'short',
};

export default WeekDay;