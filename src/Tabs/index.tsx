import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({
  children,
  selectedTabId,
  onTabClick,
}) => (
  <div>
    {React.Children.map(children, tab => React.cloneElement(tab, {
      selected: selectedTabId === tab.props.tabId,
      onClick: onTabClick,
    }))}
  </div>
);

Tabs.propTypes = {
  children: PropTypes.node,
  selectedTabId: PropTypes.string,
  onTabClick: PropTypes.func,
};

export default Tabs;
