import React from 'react';
import InputStateless from '../InputStateless';
import PseudoClassComponent from '../PseudoClassComponent';

class Input extends PseudoClassComponent {
  // @ts-expect-error TS(2416): Property 'render' in type 'Input' is not assignabl... Remove this comment to see the full error message
  render() {
    return (
      <InputStateless
        {...this.props}
        // @ts-expect-error TS(2322): Type '{ hovered: any; focused: any; onMouseEnter: ... Remove this comment to see the full error message
        hovered={this.state.hovered}
        // @ts-expect-error TS(2339): Property 'focused' does not exist on type 'Readonl... Remove this comment to see the full error message
        focused={this.state.focused}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onFocus={() => {
          this.handleFocus();
          // @ts-expect-error TS(2339): Property 'onFocus' does not exist on type 'Readonl... Remove this comment to see the full error message
          if (this.props.onFocus) {
            // @ts-expect-error TS(2339): Property 'onFocus' does not exist on type 'Readonl... Remove this comment to see the full error message
            this.props.onFocus();
          }
        }}
        onBlur={() => this.handleBlur()}
      />
    );
  }
}

export default Input;
