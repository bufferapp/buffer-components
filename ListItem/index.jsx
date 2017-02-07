import React, { PropTypes } from 'react';

const ListItem = ({ children }) =>
  <li>{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
