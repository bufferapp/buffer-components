import React from 'react';
import Input from '../Input';

const InputEmail = ({
  input,
  label,
  meta,
  placeholder,
}) =>
  <Input
    input={input}
    label={label}
    meta={meta}
    placeholder={placeholder}
    type={'email'}
  />;

InputEmail.propTypes = {
  ...Input.commonPropTypes,
};

export default InputEmail;
