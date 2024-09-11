import React from 'react';
import Icon from '../index';

const ContentLibraryIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M1.6,3.2 L1.6,14.4 L12.8,14.4 L12.8,16 L0,16 L0,3.2 L1.6,3.2 Z M3.2,0 L16,0 L16,12.8 L3.2,12.8 L3.2,0 Z" />
  </Icon>;

ContentLibraryIcon.propTypes = {
  ...Icon.propTypes,
};

export default ContentLibraryIcon;
