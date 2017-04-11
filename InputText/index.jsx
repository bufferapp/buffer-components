import React, { PropTypes } from 'react';
import styles from './style.css';
import Text from '../Text';

/* eslint-disable react/prop-types */

const renderLabel = ({ label }) => (
  label ? (
    <div className={styles.label}>
      <Text>{label}</Text>
    </div>
  ) : null
);

/* eslint-enable react/prop-types */

const InputText = ({ input, label }) =>
  <div>
    {renderLabel({ label })}
    <input
      className={styles.input}
      value={input.value}
      onChange={input.onChange}
    />
  </div>;

InputText.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
  label: PropTypes.string,
};

export default InputText;
