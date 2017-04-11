import React, { PropTypes } from 'react';

const InputText = ({ input }) =>
  <input
    value={input.value}
    onChange={input.onChange}
  />;

InputText.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default InputText;
