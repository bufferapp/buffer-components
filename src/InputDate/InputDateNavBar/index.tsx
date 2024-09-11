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
  onNavigationClick
}: any) => {

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
    // @ts-expect-error TS(2322): Type '{ position: string; left: string; right: num... Remove this comment to see the full error message
    <div style={styles.navbar}>
      // @ts-expect-error TS(2322): Type '{ float: string; }' is not assignable to typ... Remove this comment to see the full error message
      <div style={styles.left}>
        // @ts-expect-error TS(2322): Type '{ children: Element; type: string; noStyle: ... Remove this comment to see the full error message
        <Button type={'button'} noStyle disabled={disablePreviousButton ? true : false} onClick={onPrev}>
            <span style={styles.align}>
              <ArrowLeftIcon color={disablePreviousButton ? 'geyser' : 'black'}/>
            </span>
        </Button>
      </div>
      // @ts-expect-error TS(2322): Type '{ float: string; }' is not assignable to typ... Remove this comment to see the full error message
      <div style={styles.right}>
        // @ts-expect-error TS(2322): Type '{ children: Element; type: string; noStyle: ... Remove this comment to see the full error message
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