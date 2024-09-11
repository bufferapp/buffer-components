import React from 'react';
import Icon from '../index';

const CheckmarkIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M5,12 C5,11.4477153 5.44335318,11 6.0093689,11 L9,11 L9,2.99754465 C9,2.44661595 9.44386482,2 10,2 L10,2 C10.5522847,2 11,2.44483697 11,2.9955775 L11,12.0044225 C11,12.5542648 10.5490248,13 10.009222,13 L5.99077797,13 C5.44358641,13 5,12.5561352 5,12 L5,12 Z" transform="translate(8.000000, 7.500000) rotate(-315.000000) translate(-8.000000, -7.500000) " />
  </Icon>;

CheckmarkIcon.propTypes = {
  ...Icon.propTypes,
};

export default CheckmarkIcon;
