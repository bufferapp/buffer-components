import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PseudoClassComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  static defaultProps = {
    children: null,
  }
  constructor() {
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();
    this.state = {
      hovered: false,
      focused: false,
    };
  }

  handleMouseEnter() {
    this.setState({
      hovered: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hovered: false,
    });
  }

  handleFocus() {
    this.setState({
      focused: true,
    });
  }

  handleBlur() {
    this.setState({
      focused: false,
    });
  }

  // Override this and wrap a stateless component
  render() {
    // @ts-expect-error TS(2339): Property 'children' does not exist on type 'Readon... Remove this comment to see the full error message
    const { children, ...rest } = this.props;
    return React.cloneElement(
      children,
      {
        ...rest,
        // @ts-expect-error TS(2339): Property 'hovered' does not exist on type 'Readonl... Remove this comment to see the full error message
        hovered: this.state.hovered,
        // @ts-expect-error TS(2339): Property 'focused' does not exist on type 'Readonl... Remove this comment to see the full error message
        focused: this.state.focused,
        onMouseEnter: () => this.handleMouseEnter(),
        onMouseLeave: () => this.handleMouseLeave(),
        onFocus: () => this.handleFocus(),
        onBlur: () => this.handleBlur(),
      },
    );
  }
}
