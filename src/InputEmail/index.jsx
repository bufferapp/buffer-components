import React from 'react';
import Input from '../Input';

const InputEmail = ({
  input,
  label,
  meta,
  placeholder,
  focused,
  onFocus,
  onBlur,
}) =>
  (<Input
    input={input}
    label={label}
    meta={meta}
    placeholder={placeholder}
    type="email"
    focused={focused}
    onFocus={onFocus}
    onBlur={onBlur}
  />);

InputEmail.propTypes = {
  ...Input.commonPropTypes,
};

export default InputEmail;
