import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

const style = {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
};

const List = ({ items }) =>
  <ul style={style}>
    {items.map((item, i) => <ListItem key={item.id ? item.id : i}>{item}</ListItem>)}
  </ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};

export default List;
