import React from 'react';
import Input from '../Input';

const InputPassword = ({
  input,
  label,
  meta,
}) =>
  <Input
    input={input}
    label={label}
    meta={meta}
    type={'password'}
  />;

InputPassword.propTypes = {
  ...Input.commonPropTypes,
};

export default InputPassword;
