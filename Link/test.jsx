import React from 'react';
import { mount } from 'enzyme';
import LinkStateless from '../LinkStateless';
import Link from './index';

describe('Link', () => {
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <Link href={'localhost:8000'}>A Link</Link>,
    );
    const button = wrapper
      .find(LinkStateless);
    button.simulate('mouseEnter');
    expect(button.props().hovered)
      .toBe(true);
    button.simulate('mouseLeave');
    expect(button.props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(
      <Link href={'localhost:8000'}>A Link</Link>,
    );
    const button = wrapper
      .find(LinkStateless);
    button.simulate('focus');
    expect(button.props().focused)
      .toBe(true);
    button.simulate('blur');
    expect(button.props().focused)
      .toBe(false);
  });
});
