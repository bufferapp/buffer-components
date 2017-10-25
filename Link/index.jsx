import React from 'react';
import LinkStateless from '../LinkStateless';
import PseudoClassComponent from '../PseudoClassComponent';

const isNativeComponent = component => typeof component.type === 'string';

class Link extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    let hoveredChildren = children;
    // string as children isn't clonable
    // also don't add `hover` prop to native components
    if (React.isValidElement(children) && !isNativeComponent(children)) {
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
