import React, { PropTypes } from 'react';
import ListItem from '../ListItem';

const List = ({ items }) =>
  <ul>
    {items.map(item => <ListItem>{item}</ListItem>)}
  </ul>;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
};

export default List;
