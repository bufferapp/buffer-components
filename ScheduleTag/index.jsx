import React, { PropTypes } from 'react';
import styles from './style.css';

const ScheduleTag = ({ dateString }) => {
  return (
    <span className={styles.scheduleTag}>
        {dateString}
        <span className={styles.arrow}>
        </span>
    </span>
  );
};

ScheduleTag.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default ScheduleTag;