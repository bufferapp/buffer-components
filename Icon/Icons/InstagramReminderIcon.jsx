import React from 'react';
import Icon from '../../Icon';

const InstagramReminderIcon = ({ color, size }) =>
  <Icon color={color} size={size}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="IG-reminder-ICon" transform="translate(8.000000, 8.000000) rotate(-30.000000) translate(-8.000000, -8.000000) ">
            <circle id="Oval" fill="#E7395D" fill-rule="evenodd" cx="8" cy="8" r="8"></circle>
            <path d="M5.00058365,6.67795278 C5.11458992,5.4977419 6.01019524,4.90892825 7.68739961,4.91151185 C9.36460398,4.91409544 10.2605784,5.5003665 10.3753228,6.67032502 L10.3966075,9.13920589 C11.0873522,9.44157021 11.4308382,9.82972545 11.4270653,10.3036716 C11.4232924,10.7776178 11.0798065,11.0029142 10.3966075,10.9795607 L5.02276234,10.9795607 C4.31846057,11.0114455 3.97079783,10.7846378 3.97977415,10.2991377 C3.98875046,9.81363759 4.33641319,9.42376953 5.02276234,9.1295335 L5.00058365,6.67795278 Z" id="Path-3" stroke="#FFFFFF" stroke-width="1"></path>
            <path d="M7.26565845,4.93790143 C6.94430136,4.9238759 6.64394494,3.54990179 7.67719847,3.55279296 C8.71045199,3.55568412 8.39424717,4.87083264 8.13153192,4.93537935" id="Path-4" stroke="#FFFFFF" stroke-width="1"></path>
            <path d="M6.36432452,12.2812145 C6.41101378,11.8380049 6.56479921,11.0025195 7.8452267,11.0169154 C9.1256542,11.0313114 9.23445271,11.8567668 9.14624139,12.2674354" id="Path-4" stroke="#FFFFFF" stroke-width="1" transform="translate(7.766893, 11.648973) rotate(-180.000000) translate(-7.766893, -11.648973) "></path>
        </g>
    </g>
  </Icon>;

InstagramReminderIcon.propTypes = {
  ...Icon.propTypes,
};

export default InstagramReminderIcon;
