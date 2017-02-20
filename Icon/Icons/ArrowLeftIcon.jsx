import React from 'react';
import Icon from '../../Icon';

const ArrowLeftIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M4.92576783,3.81434559 C4.53597948,3.42533817 4.5351389,2.79705307 4.92999649,2.40496826 L4.92999649,2.40496826 C5.32212026,2.01559807 5.95539281,2.01782576 6.34493101,2.41042843 L11.2950684,7.3995081 C11.6843914,7.79189385 11.6846066,8.4258744 11.2950684,8.81602474 L6.34493101,13.7739411 C5.95560803,14.1638759 5.32485408,14.1648267 4.92999649,13.7699585 L4.92999649,13.7699585 C4.53787272,13.3778242 4.53276646,12.7496688 4.93637278,12.3492951 L8.860413,8.45668374 C9.05900809,8.25967927 9.06487811,7.94516326 8.860413,7.74110779 L4.92576783,3.81434559 Z" transform="translate(8.109997, 8.089966) scale(-1, 1) translate(-8.109997, -8.089966) " />
  </Icon>;

ArrowLeftIcon.propTypes = {
  ...Icon.PropTypes,
};

export default ArrowLeftIcon;
