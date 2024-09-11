import React from 'react';
import InputStateless from '../InputStateless';
import PseudoClassComponent from '../PseudoClassComponent';

class Input extends PseudoClassComponent {
  render() {
    return (
      <InputStateless
        {...this.props}
        hovered={this.state.hovered}
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => {
          this.handleFocus();
          if (this.props.onFocus) {
            this.props.onFocus();
          }
        }}
        onBlur={() => this.handleBlur()}
      />
    );
  }
}

export default Input;
