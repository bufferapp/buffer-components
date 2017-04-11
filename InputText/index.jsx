import React, { PropTypes } from 'react';
import styles from './style.css';

const InputText = ({ input }) =>
  <input
    className={styles.input}
    value={input.value}
    onChange={input.onChange}
  />;

InputText.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default InputText;
