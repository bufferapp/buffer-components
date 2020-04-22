import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {
  black,
} from '../style/color';
import {
  borderRadius,
} from '../style/border';

const style = {
  padding: '0.1rem 0.4rem 0.1rem 0.4rem',
  backgroundColor: black,
  borderRadius,
  opacity: '0.65',
  letterSpacing: '0.1rem',
};

const IdTag = ({
  children,
  className,
}) =>
  <span
    style={style}
    className={className}
  >
    <Text color={'white'}>{children}</Text>
  </span>;

IdTag.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.bool,
};

export default IdTag;
