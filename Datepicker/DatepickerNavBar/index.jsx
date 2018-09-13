import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Select from '../../Select';
import { ArrowRightIcon, ArrowLeftIcon } from '../../Icon/Icons';
import Button from '../../Button';
import moment from 'moment';

const NavBar = ({
  month,
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  localeUtils,
  firstMonthToDisplay,
  onNavigationClick,
}) => {
  const styles = {
    navbar: {
      position: 'absolute',
      left: 'unset',
      right: 0,
      width: '2.5rem',
    },
    left: {
      float: 'left',
    },
    right: {
      float: 'right',
    },
    align: {
      verticalAlign: 'middle',
    },
  };

  const onNext = () => {
    onNextClick();
    onNavigationClick(nextMonth);
  };

  const onPrev = () => {
    onPreviousClick();
    onNavigationClick(prevMonth);
  };

  const disablePreviousButton = (moment(month).isAfter(firstMonthToDisplay, 'month')) ? false : true;

  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <Button noStyle disabled={disablePreviousButton ? true : false} onClick={onPrev}>
            <span style={styles.align}>
              <ArrowLeftIcon color={disablePreviousButton ? 'geyser' : 'black'}/>
            </span>
        </Button>
      </div>
      <div style={styles.right}>
        <Button noStyle onClick={onNext}>
          <span style={styles.align}>
            <ArrowRightIcon color={'black'} />
          </span>
        </Button>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  firstMonthToDisplay: PropTypes.instanceOf(Date),
  onNavigationClick: PropTypes.func,
};

NavBar.defaultProps = {
  firstMonthToDisplay: moment().toDate(),
  onNavigationClick: () => {},
};

export default NavBar;