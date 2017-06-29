import React from 'react';
import { mount } from 'enzyme';
import LinkStateless from '../LinkStateless';
import Link from './index';
import testComponentA11y from '../lib/a11yTestHelper';

describe('Link', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <Link href={'localhost:8000'}>A Link</Link>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(
      <Link href={'localhost:8000'}>A Link</Link>,
    );
    const link = wrapper
      .find(LinkStateless);
    link.simulate('mouseEnter');
    expect(link.props().hovered)
      .toBe(true);
    link.simulate('mouseLeave');
    expect(link.props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(
      <Link href={'localhost:8000'}>A Link</Link>,
    );
    const link = wrapper
      .find(LinkStateless);
    link.simulate('focus');
    expect(link.props().focused)
      .toBe(true);
    link.simulate('blur');
    expect(link.props().focused)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    /* eslint-disable react/prop-types */
    const HoverableFocusableThing = ({ hovered, focused }) =>
      <div>{hovered} - {focused}</div>;
    /* eslint-enable react/prop-types */
    const wrapper = mount(
      <Link>
        <HoverableFocusableThing />
      </Link>,
    );
    const link = wrapper
      .find(LinkStateless);
    link.simulate('focus');
    expect(link.props().focused)
      .toBe(true);
    link.simulate('blur');
    expect(link.props().focused)
      .toBe(false);
  });
});
