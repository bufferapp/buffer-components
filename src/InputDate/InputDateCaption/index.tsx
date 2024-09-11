import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import moment from 'moment';

const styles = {
  caption: {
    height: '1.5rem',
    textAlign: 'left',
    paddingLeft: '0.5rem',
  },
};

const Caption = ({
  date
}: any) => {
  const month = moment(date).format('MMMM YYYY');

  return (
    // @ts-expect-error TS(2322): Type '{ height: string; textAlign: string; padding... Remove this comment to see the full error message
    <div style={styles.caption}>
      <Text color={'black'} weight={'bold'} size={'mini'}>
        {month}
      </Text>
    </div>
  );
};

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Caption;