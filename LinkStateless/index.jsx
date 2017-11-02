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
  fontSizeExtraSmall,
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
  onClick,
  padding,
  block,
  extraSmall,
}) => {
  const style = calculateStyles({
    default: {
      color: curiousBlue,
      fontFamily,
      padding,
    },
    hovered: {
      color: denim,
    },
    unstyled: {
      textDecoration: 'none',
      outline: 'none',
    },
    block: {
      display: 'block',
    },
    extraSmall: {
      fontSize: fontSizeExtraSmall,
    },
    focused: unstyled ? '' : focusedStyle,
  }, {
    hovered,
    unstyled,
    focused,
    block,
    extraSmall,
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
      onClick={onClick}
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
  onClick: PropTypes.func,
  padding: PropTypes.string,
  block: PropTypes.bool,
  extraSmall: PropTypes.bool,
};

Link.defaultProps = {
  padding: '0',
  block: false,
};

export default Link;
