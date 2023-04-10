import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { ArrowRightIcon, ArrowLeftIcon } from '../../Icon/Icons';
import Button from '../../Button';
import moment from 'moment';

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

const NavBar = ({
  month,
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  firstMonthToDisplay,
  onNavigationClick,
}) => {

  const onNext = () => {
    onNextClick();
    onNavigationClick(nextMonth);
  };

  const onPrev = () => {
    onPreviousClick();
    onNavigationClick(previousMonth);
  };

  const disablePreviousButton = (moment(month).isAfter(firstMonthToDisplay, 'month')) ? false : true;

  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <Button type={'button'} noStyle disabled={disablePreviousButton ? true : false} onClick={onPrev}>
            <span style={styles.align}>
              <ArrowLeftIcon color={disablePreviousButton ? 'geyser' : 'black'}/>
            </span>
        </Button>
      </div>
      <div style={styles.right}>
        <Button type={'button'} noStyle onClick={onNext}>
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