import React from 'react';
import Icon from '../../Icon';

const CommentIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M0,2.0085302 C0,0.899249601 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.901950359 16,2.0085302 L16,9.9914698 C16,11.1007504 15.1132936,12 14.0018986,12 L8,12 L4,16 L4,12 L2,12 C0.8954305,12 0,11.0980496 0,9.9914698 L0,2.0085302 Z" />
  </Icon>;

CommentIcon.propTypes = {
  ...Icon.propTypes,
};

export default CommentIcon;
