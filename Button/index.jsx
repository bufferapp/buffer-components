import React from 'react';
import ButtonStateless from '../ButtonStateless';
import PseudoClassComponent from '../PseudoClassComponent';

class Button extends PseudoClassComponent {
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
      <ButtonStateless
        {...rest}
        hovered={this.state.hovered}
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {hoveredChildren}
      </ButtonStateless>
    );
  }
}

export default Button;
