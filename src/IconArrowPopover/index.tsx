import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArrowPopover from '../ArrowPopover';

const containerStyle = {
  display: 'inline-block',
  width: '16px',
  height: '16px',
  position: 'relative',
};

class IconArrowPopover extends Component {
  id: any;
  constructor() {
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();
    this.state = {
      hovered: false,
    };
  }

  componentWillMount() {
    // @ts-expect-error TS(2339): Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const uuid = this.props.label.replace(/\s/g, '');
    this.id = `tooltip_${uuid}`;
  }

  render() {
    // @ts-expect-error TS(2339): Property 'icon' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { icon, children: tooltip, ...rest } = this.props;
    return (
      <div
        // @ts-expect-error TS(2322): Type '{ display: string; width: string; height: st... Remove this comment to see the full error message
        style={containerStyle}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'number'.
        tabIndex="0"
        aria-describedby={this.id}
        // @ts-expect-error TS(2339): Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
        aria-label={this.props.label}
        role="tooltip"
      >
        {icon}
        <ArrowPopover
          // @ts-expect-error TS(2339): Property 'hovered' does not exist on type 'Readonl... Remove this comment to see the full error message
          visible={this.state.hovered}
          offset={{ left: 3, top: -4 }}
          isTooltip
          id={this.id}
          {...rest}
        >
          {tooltip}
        </ArrowPopover>
      </div>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
IconArrowPopover.propTypes = {
  ...ArrowPopover.propTypes,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconArrowPopover;
