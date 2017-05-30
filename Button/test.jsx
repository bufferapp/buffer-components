import React from 'react';
import { mount } from 'enzyme';
import ButtonStateless from '../ButtonStateless';
import Button from './index';

describe('Button', () => {
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <Button>A Button</Button>,
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
      <Button>A Button</Button>,
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

  it('should toggle focused prop when focus and blur are triggered', () => {
    /* eslint-disable react/prop-types */
    const HoverableFocusableThing = ({ hovered, focused }) =>
      <div>{hovered} - {focused}</div>;
    /* eslint-enable react/prop-types */
    const wrapper = mount(
      <Button>
        <HoverableFocusableThing />
      </Button>,
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
