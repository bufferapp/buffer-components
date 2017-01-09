import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './card.css';

const Card = (props) => {
  const classes = classNames(styles, 'card', {
    'double-padding': props.doublePadding,
    empty: props.empty,
    failed: props.failed,
    'no-border': props.noBorder,
    'no-padding': props.noPadding,
  });
  return (
    <div className={classes} {...cleanProps(props, Card.propTypes)}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  doublePadding: PropTypes.bool,
  empty: PropTypes.bool,
  failed: PropTypes.bool,
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
};

export default Card;
