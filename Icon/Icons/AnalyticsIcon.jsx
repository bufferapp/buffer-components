import React, { PropTypes } from 'react';
import Icon from '../../Icon';

const AnalyticsIcon = ({ size }) =>
  <Icon size={size}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#000000">
        <path d="M2,1 L2,14 L15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 L1,16 C0.44771525,16 0,15.5522847 0,15 L0,1 C0,0.44771525 0.44771525,0 1,0 C1.55228475,0 2,0.44771525 2,1 Z" id="axis" />
        <path d="M6,11 L6,3 C6,2.44771525 5.55228475,2 5,2 C4.44771525,2 4,2.44771525 4,3 L4,11 C4,11.5522847 4.44771525,12 5,12 C5.55228475,12 6,11.5522847 6,11 Z" id="bar-1" />
        <path d="M10,11 L10,5 C10,4.44771525 9.55228475,4 9,4 C8.44771525,4 8,4.44771525 8,5 L8,11 C8,11.5522847 8.44771525,12 9,12 C9.55228475,12 10,11.5522847 10,11 Z" id="bar-2" />
        <path d="M14,11 L14,3 C14,2.44771525 13.5522847,2 13,2 C12.4477153,2 12,2.44771525 12,3 L12,11 C12,11.5522847 12.4477153,12 13,12 C13.5522847,12 14,11.5522847 14,11 Z" id="bar-3" />
      </g>
    </g>
  </Icon>;

AnalyticsIcon.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

export default AnalyticsIcon;
