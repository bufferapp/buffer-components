import React, { PropTypes } from 'react';
import ListItem from '../ListItem';
import style from './style.css';

const List = ({ items }) =>
  <ul className={style.ul}>
    {items.map(item => <ListItem>{item}</ListItem>)}
  </ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};

export default List;
