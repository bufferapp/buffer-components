import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const HoverableText = ({
  color,
  children,
  hovered,
  hoverColor,
  size,
  weight,
  onMouseEnter,
  onMouseLeave,
}) =>
  <span
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Text
      color={hovered ? hoverColor : color}
      size={size}
      weight={weight}
    >
      {children}
    </Text>
  </span>;

HoverableText.propTypes = {
  ...Text.propTypes,
  hovered: PropTypes.bool.isRequired,
  hoverColor: Text.propTypes.color,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

HoverableText.defaultProps = {
  hoverColor: 'black',
  hovered: false,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

export default HoverableText;
