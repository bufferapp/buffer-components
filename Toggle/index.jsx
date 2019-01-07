import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Button from '../Button';
import { outerSpaceLight, offWhite, curiousBlue } from '../style/color';
import { borderWidth } from '../style/border';
import { transitionAnimationTime, transitionAnimationType } from '../style/animation';

const Toggle = ({
  on,
  onClick,
  onText,
  offText,
  disabled,
  size,
}) => (
  <Button noStyle onClick={onClick} disabled={disabled}>
    <div
      style={{
        display: 'flex',
        opacity: disabled ? 0.5 : undefined,
      }}
    >
      <div
        style={{
          height: '1rem',
        }}
      >
        <Text
          size={size}
        >
          {on ? onText : offText}
        </Text>
      </div>
      <div
        style={{
          position: 'relative',
          height: '1rem',
          width: '2rem',
          marginLeft: '0.5rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 1,
            left: 1,
            bottom: 0,
            right: 0,
            borderRadius: '2rem',
            background: on ? curiousBlue : offWhite,
            border: `${borderWidth} solid ${on ? curiousBlue : outerSpaceLight}`,
            transition: `background ${transitionAnimationTime} ${transitionAnimationType}, border ${transitionAnimationTime} ${transitionAnimationType}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: '1rem',
            width: '1rem',
            top: 0,
            left: on ? 'calc(100% - 1rem)' : '0%',
            borderRadius: '50%',
            background: offWhite,
            border: `${borderWidth} solid ${on ? curiousBlue : outerSpaceLight}`,
            transition: `left ${transitionAnimationTime} ${transitionAnimationType}, border ${transitionAnimationTime} ${transitionAnimationType}`,
          }}
        />
      </div>
    </div>
  </Button>
);

Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onText: PropTypes.string,
  offText: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['extra-small', 'large', 'extra-large', 'mini', 'small']),
};

Toggle.defaultProps = {
  on: false,
  onText: 'Enabled',
  offText: 'Disabled',
  disabled: false,
};

export default Toggle;
