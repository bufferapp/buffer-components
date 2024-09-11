import React from 'react';
import PropTypes from 'prop-types';

const style = {
  listStyle: 'none',
};

const ListItem = ({
  children
}: any) =>
  <li style={style}>{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
