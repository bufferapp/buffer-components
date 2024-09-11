import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

const InputEmail = ({
  input,
  label,
  meta,
  placeholder
}: any) =>
  <Input
    // @ts-expect-error TS(2322): Type '{ input: any; label: any; meta: any; placeho... Remove this comment to see the full error message
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
