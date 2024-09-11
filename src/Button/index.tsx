import React from 'react';
import ButtonStateless from '../ButtonStateless';
import PseudoClassComponent from '../PseudoClassComponent';

const isNativeComponent = (component: any) => typeof component.type === 'string';

class Button extends PseudoClassComponent {
  // @ts-expect-error TS(2416): Property 'render' in type 'Button' is not assignab... Remove this comment to see the full error message
  render() {
    // @ts-expect-error TS(2339): Property 'children' does not exist on type 'Readon... Remove this comment to see the full error message
    const { children, ...rest } = this.props;
    let hoveredChildren = children;
    // string as children isn't clonable
    if (React.isValidElement(children) && !isNativeComponent(children)) {
      hoveredChildren = React.cloneElement(
        children,
        // @ts-expect-error TS(2769): No overload matches this call.
        { hovered: this.state.hovered },
      );
    }
    return (
      <ButtonStateless
        {...rest}
        // @ts-expect-error TS(2339): Property 'hovered' does not exist on type 'Readonl... Remove this comment to see the full error message
        hovered={this.state.hovered}
        // @ts-expect-error TS(2339): Property 'focused' does not exist on type 'Readonl... Remove this comment to see the full error message
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
