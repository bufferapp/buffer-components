import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Text from '../Text';
import Card from '../Card';
import {
  CircleCheckmarkIcon,
  CloseIcon,
  WarningIcon,
} from '../Icon/Icons';

const NotificationIcon = ({
  type,
}) => {
  if (type === 'error') {
    return (
      <WarningIcon
        color="torchRed"
        size="large"
      />
    );
  }
  return (
    <CircleCheckmarkIcon
      color="shamrock"
      size="large"
    />
  );
};

NotificationIcon.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
};

const Notification = ({
  children,
  onCloseClick,
  type,
}) => (
  <Card
    noPadding
    noBorder
    shadowHeight={2}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          margin: '1rem',
        }}
      >
        <NotificationIcon
          type={type}
        />
      </div>
      <div
        style={{
          flexGrow: 1,
          margin: '1rem 0',
        }}
      >
        <Text
          size="mini"
        >
          {children}
        </Text>
      </div>
      <div
        style={{
          margin: '0.5rem 0.5rem 0 1.5rem',
        }}
      >
        <Button
          onClick={onCloseClick}
          noStyle
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  </Card>
);

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

Notification.defaultProps = {
  type: 'success',
};

export default Notification;
