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

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div className={styles.error}>
      <Text color={'red'}>{ error }</Text>
    </div>
  ) : null
);

/* eslint-enable react/prop-types */

const InputText = ({ input, label, meta = {} }) =>
  <div>
    {renderLabel({ label })}
    <input
      className={styles.input}
      value={input.value}
      onChange={input.onChange}
    />
    {renderError(meta)}
  </div>;

InputText.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
};

export default InputText;
