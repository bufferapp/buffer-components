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
  marginBottom: '0.25rem',
};

const errorStyle = {
  marginTop: '0.25rem',
};

const renderLabel = ({ label }) => (
  label ? (
    <div style={labelStyle}>
      <Text size="small" weight="semi-bold">{label}</Text>
    </div>
  ) : null
);

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div style={errorStyle}>
      <Text size="small" color="torchRed">{error}</Text>
    </div>
  ) : null
);

/* eslint-enable react/prop-types */

const InputStateless = ({
  input,
  label,
  meta,
  placeholder,
  type,
  focused,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = calculateStyles({
    default: {
      fontFamily,
      fontSize,
      padding: '0.5rem',
      borderRadius,
      border: `${borderWidth} solid ${geyser}`,
      borderColor: geyser,
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {renderError(meta)}
    </div>
  );
};

InputStateless.commonPropTypes = {
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
};

InputStateless.propTypes = {
  ...InputStateless.commonPropTypes,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
  ]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

InputStateless.defaultProps = {
  input: {},
  meta: {},
  type: 'text',
};

export default InputStateless;
