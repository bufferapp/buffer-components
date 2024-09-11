import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

const InputTextarea = ({
  input,
  label,
  meta,
  placeholder
}: any) => (
  // @ts-expect-error TS(2322): Type '{ input: any; label: any; meta: any; placeho... Remove this comment to see the full error message
  <Input input={input} label={label} meta={meta} placeholder={placeholder} type="textarea" />
);

InputTextarea.propTypes = {
  ...InputStateless.commonPropTypes,
};

export default InputTextarea;
