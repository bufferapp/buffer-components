import React from 'react';
import LinkStateless from '../LinkStateless';
import PseudoClassComponent from '../PseudoClassComponent';

class Link extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    let hoveredChildren = children;
    // string as children isn't clonable
    if (React.isValidElement(children)) {
      hoveredChildren = React.cloneElement(
        children,
        { hovered: this.state.hovered },
      );
    }
    return (
      <LinkStateless
        {...rest}
        hovered={this.state.hovered}
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {hoveredChildren}
      </LinkStateless>
    );
  }
}

export default Link;
