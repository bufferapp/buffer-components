import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';

const WeekDay = ({
  weekdayLength,
  weekday,
  className,
  localeUtils,
  locale
}: any) => {
  const styles = {
    weekday: {
      display: 'table-cell',
      padding: '.5rem 0',
      textAlign: 'center',
      width: '3rem',
    },
  };

  const weekdaysList = localeUtils.formatWeekdayLong(weekday, locale);

  const getWeekdayName = (weekdaysList: any, weekdayLength: any) => {
    switch(weekdayLength) {
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
    // @ts-expect-error TS(2322): Type '{ display: string; padding: string; textAlig... Remove this comment to see the full error message
    <div style={styles.weekday} title={weekdaysList}>
      <Text color={'lightSlate'} size={'small'}>
        {getWeekdayName(weekdaysList, weekdayLength)}
      </Text>
    </div>
  );
};

WeekDay.propTypes = {
  weekdayLength: PropTypes.oneOf(['short', 'medium', 'long']),
};

WeekDay.defaultProps = {
  weekdayLength: 'short',
};

export default WeekDay;