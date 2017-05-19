import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  curiousBlue,
  denim,
} from '../style/color';

const Link = ({
  children,
  hovered,
  href,
  newTab,
  unstyled,
  onMouseEnter,
  onMouseLeave,
}) => {
  const style = calculateStyles({
    default: {
      color: curiousBlue,
    },
    hovered: {
      color: denim,
    },
    unstyled: {
      textDecoration: 'none',
    },
  }, {
    hovered,
    unstyled,
  });

  return (
    <a
      style={style}
      href={href}
      target={newTab ? '_blank' : '_self'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  hovered: PropTypes.bool,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  unstyled: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Link;
