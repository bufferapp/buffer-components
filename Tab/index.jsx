import React from 'react';
import PropTypes from 'prop-types';
import HoverableText from '../HoverableText';
import Link from '../Link';
import {
  curiousBlueUltraLight,
} from '../style/color';
import {
  calculateStyles,
} from '../lib/utils';

const Tab = ({
  children,
  selected,
  tabId,
  onClick,
}) => {
  const style = calculateStyles({
    default: {
      display: 'inline-block',
      padding: '0.75rem 1rem',
      borderRadius: '4px',
    },
    selected: {
      backgroundColor: curiousBlueUltraLight,
    },
  }, {
    selected,
  });
  return (
    <Link
      href={'#'}
      unstyled
      onClick={(e) => {
        e.preventDefault();
        onClick(tabId);
      }}
    >
      <span style={style}>
        <HoverableText
          color="shuttleGray"
          hoverColor="black"
          weight={selected ? 'bold' : null}
        >
          {children}
        </HoverableText>
      </span>
    </Link>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  tabId: PropTypes.string,
};

Tab.defaultProps = {
  selected: false,
};

export default Tab;
