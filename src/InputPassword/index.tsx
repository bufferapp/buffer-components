import React from 'react';
import Input from '../Input';
import InputStateless from '../InputStateless';

const InputPassword = ({
  input,
  label,
  meta
}: any) =>
  <Input
    // @ts-expect-error TS(2322): Type '{ input: any; label: any; meta: any; type: s... Remove this comment to see the full error message
    input={input}
    label={label}
    meta={meta}
    type={'password'}
  />;

InputPassword.propTypes = {
  ...InputStateless.commonPropTypes,
};

export default InputPassword;
