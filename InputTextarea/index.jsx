import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

const InputTextarea = ({
  input, label, meta, placeholder,
}) => (
  <Input input={input} label={label} meta={meta} placeholder={placeholder} type="textarea" />
);

InputTextarea.propTypes = {
  ...InputStateless.commonPropTypes,
};

export default InputTextarea;
