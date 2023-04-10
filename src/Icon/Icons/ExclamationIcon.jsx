import React from 'react';
import Icon from '../index';

const ExclamationIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <circle cx="2" cy="11.5" r="1.5" />
    <path d="M0.226915479,1.81532383 C0.10159352,0.812748163 0.828802586,0 1.83610106,0 L2.16389894,0 C3.17794956,0 3.8986115,0.811107993 3.77308452,1.81532383 L3.12462877,7.00296986 C3.0557982,7.5536144 2.55613518,8 2,8 L2,8 C1.44771525,8 0.943370461,7.54696369 0.875371233,7.00296986 L0.226915479,1.81532383 Z" />
  </Icon>;

ExclamationIcon.propTypes = {
  ...Icon.propTypes,
};

export default ExclamationIcon;
