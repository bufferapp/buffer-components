import React, { PropTypes } from 'react';
import { classNames } from '../lib/utils';
import styles from './style.css';

const Card = ({
  children,
  doublePadding,
  empty,
  failed,
  hovered,
  noBorder,
  noPadding,
  onMouseEnter,
  onMouseLeave,
}) => {
  const classes = classNames(styles, 'card', {
    'double-padding': doublePadding,
    empty,
    failed,
    hovered,
    'no-border': noBorder,
    'no-padding': noPadding,
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
  doublePadding: PropTypes.bool,
  empty: PropTypes.bool,
  failed: PropTypes.bool,
  hovered: PropTypes.bool,
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Card;
