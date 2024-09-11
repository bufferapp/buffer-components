import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

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
  ...InputStateless.commonPropTypes,
};

export default InputEmail;
