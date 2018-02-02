import React from 'react';
import Input from '../Input';

const InputPassword = ({
  input,
  label,
  meta,
  focused,
  onFocus,
  onBlur,
}) =>
  <Input
    input={input}
    label={label}
    meta={meta}
    type={'password'}
    focused={focused}
    onFocus={onFocus}
    onBlur={onBlur}
  />;

InputPassword.propTypes = {
  ...Input.commonPropTypes,
};

export default InputPassword;
