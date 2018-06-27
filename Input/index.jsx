import React from 'react';
import InputStateless from '../InputStateless';
import PseudoClassComponent from '../PseudoClassComponent';

class Input extends PseudoClassComponent {
  render() {
    const { children, ...rest } = this.props;
    return (
      <InputStateless
        {...rest}
        hovered={this.state.hovered}
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => this.handleFocus()}
        onBlur={() => this.handleBlur()}
      >
        {children}
      </InputStateless>
    );
  }
}

export default Input;
