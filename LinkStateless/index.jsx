import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  curiousBlue,
  denim,
} from '../style/color';
import {
  focusedStyle,
} from '../style/focused';
import {
  fontFamily,
} from '../style/font';

const Link = ({
  children,
  hovered,
  href,
  focused,
  newTab,
  unstyled,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  const style = calculateStyles({
    default: {
      color: curiousBlue,
      fontFamily,
    },
    hovered: {
      color: denim,
    },
    unstyled: {
      textDecoration: 'none',
    },
    focused: focusedStyle,
  }, {
    hovered,
    unstyled,
    focused,
  });

  return (
    <a
      style={style}
      href={href}
      target={newTab ? '_blank' : '_self'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  hovered: PropTypes.bool,
  href: PropTypes.string,
  focused: PropTypes.bool,
  newTab: PropTypes.bool,
  unstyled: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Link;
