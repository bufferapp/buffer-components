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
    const { children, ...rest } = this.props;
    return React.cloneElement(
      children,
      {
        ...rest,
        hovered: this.state.hovered,
        focused: this.state.focused,
        onMouseEnter: () => this.handleMouseEnter(),
        onMouseLeave: () => this.handleMouseLeave(),
        onFocus: () => this.handleFocus(),
        onBlur: () => this.handleBlur(),
      },
    );
  }
}
