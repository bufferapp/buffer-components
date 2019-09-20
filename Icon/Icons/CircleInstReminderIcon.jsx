import React from 'react';
import Icon from '../../Icon';

const CircleInstReminderIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fillRule="evenodd"/>
    <path d="M12.111 9.00705L7.08768 11.9072C6.5144 12.2382 5.86134 11.6217 6.15882 11.0303L6.47421 10.4034L5.20385 8.20308C3.97054 6.0669 8.68562 3.34466 9.91892 5.48082L11.1893 7.68115L11.8634 7.76863C12.4957 7.85068 12.6631 8.68826 12.111 9.00705Z" stroke="#FFFFFF"/>
    <path d="M8.3324 11.1888C9.22124 12.7283 11.8192 11.2284 10.9304 9.68884" stroke="#FFFFFF"/>
    <path d="M7.06432 4.99276C6.84984 3.06386 4.63506 4.34256 6.19829 5.49276" stroke="#FFFFFF"/>
  </Icon>;

CircleInstReminderIcon.propTypes = {
  ...Icon.propTypes,
};

export default CircleInstReminderIcon;