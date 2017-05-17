import React from 'react';
import PropTypes from 'prop-types';
import { calculateStyles } from '../lib/utils';
import {
  fontFamily,
  fontSize,
} from '../style/font';
import {
  borderRadius,
  borderWidth,
} from '../style/border';
import {
  geyser,
  torchRed,
  curiousBlue,
} from '../style/color';
import Text from '../Text';

/* eslint-disable react/prop-types */

const labelStyle = {
  marginBottom: '1rem',
};

const errorStyle = {
  marginTop: '1rem',
};

const renderLabel = ({ label }) => (
  label ? (
    <div style={labelStyle}>
      <Text>{label}</Text>
    </div>
  ) : null
);

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div style={errorStyle}>
      <Text color={'torchRed'}>{ error }</Text>
    </div>
  ) : null
);

/* eslint-enable react/prop-types */

const Input = ({
  input,
  label,
  meta,
  placeholder,
  type,
  focused,
  onFocus,
  onBlur,
}) => {
  const style = calculateStyles({
    default: {
      fontFamily,
      fontSize,
      padding: '0.5rem',
      borderRadius,
      border: `${borderWidth} solid ${geyser}`,
      width: '100%',
      boxSizing: 'border-box',
      outline: 0,
    },
    focused: {
      borderColor: curiousBlue,
    },
    error: {
      borderColor: torchRed,
    },
  }, {
    focused,
    error: meta.error && meta.touched,
  });
  return (
    <div>
      {renderLabel({ label })}
      <input
        style={style}
        disabled={meta.submitting}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {renderError(meta)}
    </div>
  );
};

Input.commonPropTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
  }),
  placeholder: PropTypes.string,
  focused: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.propTypes = {
  ...Input.commonPropTypes,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
  ]),
};

Input.defaultProps = {
  input: {},
  meta: {},
  type: 'text',
};

export default Input;
