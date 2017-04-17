import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './style.css';

const IdTag = ({
  children,
}) => {
  return (
    <span className={styles.label}>
      <Text color={'white'}>{children}</Text>
    </span>
  );
};

IdTag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IdTag;
