import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Button from '../Button';
import { outerSpaceLight, offWhite, curiousBlue } from '../style/color';
import { borderWidth } from '../style/border';
import { transitionAnimationTime, transitionAnimationType } from '../style/animation';

const Toggle = ({
  enabled,
  onClick,
  enabledText,
  disabledText,
}) => (
  <Button noStyle onClick={onClick}>
    <div
      style={{
        display: 'flex',
      }}
    >
      <Text>{enabled ? enabledText : disabledText}</Text>
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
            background: enabled ? curiousBlue : offWhite,
            border: `${borderWidth} solid ${enabled ? curiousBlue : outerSpaceLight}`,
            transition: `background ${transitionAnimationTime} ${transitionAnimationType}, border ${transitionAnimationTime} ${transitionAnimationType}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: '1rem',
            width: '1rem',
            top: 0,
            left: enabled ? 'calc(100% - 1rem)' : '0%',
            borderRadius: '50%',
            background: offWhite,
            border: `${borderWidth} solid ${enabled ? curiousBlue : outerSpaceLight}`,
            transition: `left ${transitionAnimationTime} ${transitionAnimationType}, border ${transitionAnimationTime} ${transitionAnimationType}`,
          }}
        />
      </div>
    </div>
  </Button>
);

Toggle.propTypes = {
  enabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  enabledText: PropTypes.string,
  disabledText: PropTypes.string,
};

Toggle.defaultProps = {
  enabled: false,
  enabledText: 'Enabled',
  disabledText: 'Disabled',
};

export default Toggle;
