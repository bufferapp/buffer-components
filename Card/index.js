import React, { PropTypes } from 'react';
import { classNames, cleanProps } from '../lib/utils';
import styles from './Card.css';

const Card = (props) => {
  const classes = classNames(styles, 'Card', {
    'Card--double-padding': props.doublePadding,
    'Card--empty': props.empty,
    'Card--no-border': props.noBorder,
    'Card--no-padding': props.noPadding,
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
  noBorder: PropTypes.bool,
  noPadding: PropTypes.bool,
};

export default Card;
