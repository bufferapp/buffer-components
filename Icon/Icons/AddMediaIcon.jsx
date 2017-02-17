import React, { PropTypes } from 'react';
import { classNames } from '../../lib/utils';
import Icon from '../../Icon';
import styles from '../style.css';

const AddMediaIcon = ({
  curiousBlue,
  curiousBlueLight,
  curiousBlueUltraLight,
  denim,
  toryBlue,
  appdotnet,
  facebook,
  googleplus,
  linkedin,
  pinterest,
  twitter,
  outerSpace,
  outerSpaceLight,
  outerSpaceUltraLight,
  shuttleGray,
  nevada,
  geyser,
  mystic,
  aquaHaze,
  white,
  shamrock,
  saffron,
  torchRed,
  size,
}) => {
  const classes = classNames(styles, 'icon', {
    'curious-blue': curiousBlue,
    'curious-blue-light': curiousBlueLight,
    'curious-blue-ultra-light': curiousBlueUltraLight,
    denim,
    'tory-blue': toryBlue,
    appdotnet,
    facebook,
    googleplus,
    linkedin,
    pinterest,
    twitter,
    'outer-space': outerSpace,
    'outer-space-light': outerSpaceLight,
    'outer-space-ultra-light': outerSpaceUltraLight,
    'shuttle-gray': shuttleGray,
    nevada,
    geyser,
    mystic,
    'aqua-haze': aquaHaze,
    white,
    shamrock,
    saffron,
    'torch-red': torchRed,
  });
  return (
    <Icon size={size}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g className={classes}>
          <g transform="translate(0.000000, 0.500000)">
            <ellipse cx="3.5" cy="7.5" rx="1" ry="1" />
            <path d="M7,4 L2.0085302,4 C0.901950359,4 0,4.8918564 0,5.99201702 L0,13.007983 C0,14.0998238 0.899249601,15 2.0085302,15 L9.9914698,15 C11.0980496,15 12,14.1081436 12,13.007983 L12,9 C11.2888953,9 10.6124623,8.8515525 10,8.58395631 L10,12.4965773 C10,12.77461 9.76920319,13 9.49956417,13 L2.50043583,13 C2.22405275,13 2,12.7670975 2,12.4965773 L2,6.50342274 C2,6.22539004 2.23079681,6 2.50043583,6 L7.41604369,6 C7.1484475,5.38753765 7,4.71110471 7,4 Z" id="Combined-Shape" />
            <path d="M6.72854847,13 L10.4427219,13 C10.994669,13 11.1806866,12.6353752 10.8595051,12.1855878 L8.08131797,8.29497314 C7.75836623,7.84270671 7.23939818,7.84518568 6.9182166,8.29497314 L5.17096772,10.7418465 L4.89598004,10.3431742 C4.58220845,9.88827357 4.04270416,9.86191756 3.68900632,10.2814689 L1.19456888,13.2403351 C0.837902685,13.6634075 1.00101068,14 1.55225078,14 L6.42019856,14 C6.96793003,14 7.16465526,13.63226 6.85175993,13.1786298 L6.72854847,13 Z" id="Combined-Shape" />
            <path d="M12.5,3.5 L12.5,2.49047852 C12.5,2.21505737 12.2761424,2 12,2 C11.7319336,2 11.5,2.21959471 11.5,2.49047852 L11.5,3.5 L10.4904785,3.5 C10.2150574,3.5 10,3.72385763 10,4 C10,4.26806641 10.2195947,4.5 10.4904785,4.5 L11.5,4.5 L11.5,5.50952148 C11.5,5.78494263 11.7238576,6 12,6 C12.2680664,6 12.5,5.78040529 12.5,5.50952148 L12.5,4.5 L13.5095215,4.5 C13.7849426,4.5 14,4.27614237 14,4 C14,3.73193359 13.7804053,3.5 13.5095215,3.5 L12.5,3.5 Z M12,8 C9.790861,8 8,6.209139 8,4 C8,1.790861 9.790861,0 12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z" id="Combined-Shape" />
          </g>
        </g>
      </g>
    </Icon>
  );
};

AddMediaIcon.propTypes = {
  curiousBlue: PropTypes.bool,
  curiousBlueLight: PropTypes.bool,
  curiousBlueUltraLight: PropTypes.bool,
  denim: PropTypes.bool,
  toryBlue: PropTypes.bool,
  appdotnet: PropTypes.bool,
  facebook: PropTypes.bool,
  googleplus: PropTypes.bool,
  linkedin: PropTypes.bool,
  pinterest: PropTypes.bool,
  twitter: PropTypes.bool,
  outerSpace: PropTypes.bool,
  outerSpaceLight: PropTypes.bool,
  outerSpaceUltraLight: PropTypes.bool,
  shuttleGray: PropTypes.bool,
  nevada: PropTypes.bool,
  geyser: PropTypes.bool,
  mystic: PropTypes.bool,
  aquaHaze: PropTypes.bool,
  white: PropTypes.bool,
  shamrock: PropTypes.bool,
  saffron: PropTypes.bool,
  torchRed: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
};

export default AddMediaIcon;
