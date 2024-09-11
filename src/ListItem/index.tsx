import React from 'react';
import PropTypes from 'prop-types';

const style = {
  listStyle: 'none',
};

const ListItem = ({ children }) =>
  <li style={style}>{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
