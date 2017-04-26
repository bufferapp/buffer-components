import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Card = ({
  children,
  color,
  doublePadding,
  empty,
  faded,
  failed,
  hovered,
  noBorder,
  noPadding,
  onMouseEnter,
  onMouseLeave,
  reducedPadding,
}) => {
  const classes = classNames(styles, 'card', {
    'double-padding': doublePadding,
    empty,
    faded,
    failed,
    hovered,
    'reduced-padding': reducedPadding,
    'no-border': noBorder,
    'no-padding': noPadding,
    offWhite: color === 'off-white',
  });
  return (
    <div
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['off-white']),
  doublePadding: PropTypes.bool,
  empty: PropTypes.bool,
  faded: PropTypes.bool,
  failed: PropTypes.bool,
  hovered: PropTypes.bool,
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  reducedPadding: PropTypes.bool,
};

export default Card;
