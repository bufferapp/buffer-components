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
  date,
}) => {
  const month = moment(date).format('MMMM YYYY');

  return (
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