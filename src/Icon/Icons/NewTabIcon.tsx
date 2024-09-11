import React from 'react';
import Icon from '../index';

const NewTabIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M10.0030683,3 L1.32719676,3 C0.598808254,3 0,3.5951808 0,4.32937352 L0,12.3372931 C0,13.0703241 0.594206228,13.6666667 1.32719676,13.6666667 L12.0061366,13.6666667 C12.7345251,13.6666667 13.3333333,13.0714859 13.3333333,12.3372931 L13.3333333,6.33135343 L13.3333333,8.33333333 L12,8.33333333 L12,12.3333333 L1.33333333,12.3333333 L1.33333333,4.33333333 L8,4.33333333 L8,3 L10.0030683,3 Z" />
    <rect id="Rectangle-5" height="6.66666667" width="1.33333333" rx="0.666666667" x="12" y="0.333333333" />
    <rect id="Rectangle-6" height="1.33333333" width="6.66666667" rx="0.666666667" x="9.33333333" y="3" />
  </Icon>;

NewTabIcon.propTypes = {
  ...Icon.propTypes,
};

export default NewTabIcon;
