import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateStyles,
} from '../lib/utils';
import {
  curiousBlue,
} from '../style/color';

/*
TODO:

.link:hover {
  color: var(--denim);
}

.link:active {
  color: var(--tory-blue);
}

*/

const Link = ({
  children,
  href,
  newTab,
  unstyled,
}) => {
  const style = calculateStyles({
    default: {
      color: curiousBlue,
    },
    unstyled: {
      textDecoration: 'none',
    },
  }, {
    unstyled,
  });

  return (
    <a
      style={style}
      href={href}
      target={newTab ? '_blank' : '_self'}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  newTab: PropTypes.bool,
  unstyled: PropTypes.bool,
};

export default Link;
