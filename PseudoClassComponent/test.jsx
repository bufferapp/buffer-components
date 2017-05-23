import React from 'react';
import { mount } from 'enzyme';
import ButtonStateless from '../ButtonStateless';
import PseudoClassComponent from './index';

describe('PseudoClassComponent', () => {
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <PseudoClassComponent>
        <ButtonStateless>Hi</ButtonStateless>
      </PseudoClassComponent>,
    );
    const button = wrapper
      .find(ButtonStateless);
    button.simulate('mouseEnter');
    expect(button.props().hovered)
      .toBe(true);
    button.simulate('mouseLeave');
    expect(button.props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(
      <PseudoClassComponent>
        <ButtonStateless>Hi</ButtonStateless>
      </PseudoClassComponent>,
    );
    const button = wrapper
      .find(ButtonStateless);
    button.simulate('focus');
    expect(button.props().focused)
      .toBe(true);
    button.simulate('blur');
    expect(button.props().focused)
      .toBe(false);
  });
});
