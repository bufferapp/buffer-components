import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const ListItem = ({ children }) =>
  <li className={style.li}>{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
