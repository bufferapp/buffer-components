import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

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
  ...InputStateless.commonPropTypes,
};

export default InputPassword;
