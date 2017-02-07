import React, { PropTypes } from 'react';
import uuid from 'uuid';
import ListItem from '../ListItem';
import style from './style.css';

const List = ({ items }) =>
  <ul className={style.ul}>
    {items.map(item => <ListItem key={uuid()}>{item}</ListItem>)}
  </ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};

export default List;
