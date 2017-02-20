import React from 'react';
import Icon from '../../Icon';

const ArrowRightIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M4.70577424,3.81434559 C4.31598589,3.42533817 4.31514531,2.79705307 4.7100029,2.40496826 L4.7100029,2.40496826 C5.10212667,2.01559807 5.73539922,2.01782576 6.12493742,2.41042843 L11.0750748,7.3995081 C11.4643978,7.79189385 11.464613,8.4258744 11.0750748,8.81602474 L6.12493742,13.7739411 C5.73561443,14.1638759 5.10486049,14.1648267 4.7100029,13.7699585 L4.7100029,13.7699585 C4.31787913,13.3778242 4.31277287,12.7496688 4.71637919,12.3492951 L8.64041941,8.45668374 C8.8390145,8.25967927 8.84488452,7.94516326 8.64041941,7.74110779 L4.70577424,3.81434559 Z" id="icon-arrow-right" />
  </Icon>;

ArrowRightIcon.propTypes = {
  ...Icon.PropTypes,
};

export default ArrowRightIcon;
