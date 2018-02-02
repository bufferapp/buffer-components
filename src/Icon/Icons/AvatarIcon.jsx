import React from 'react';
import Icon from '../../Icon';

const AvatarIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8 15.467A7.467 7.467 0 1 0 8 .533a7.467 7.467 0 0 0 0 14.934zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="nonzero"/>
    <path d="M6.759 10.427c-.741-.826-1.525-2.12-1.525-3.637 0-2.524 1.278-3.59 2.855-3.59s2.855 1.066 2.855 3.59c0 1.478-.919 2.89-1.61 3.727.224.43.402.89.86 1.083 1.093.445 3.733.685 3.733 1.374 0 .666-3.061 2.831-5.935 2.842-2.962.01-5.74-2.156-5.74-2.842 0-.755 2.257-.925 3.539-1.374.52-.183.712-.707.968-1.173z"/>
  </Icon>;

AvatarIcon.propTypes = {
  ...Icon.propTypes,
};

export default AvatarIcon;
