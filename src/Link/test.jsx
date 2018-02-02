/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinkStateless from '../LinkStateless';
import Link from './index';
import testComponentA11y from '../lib/a11yTestHelper';

configure({ adapter: new Adapter() });

describe('Link', () => {
  it('should pass accessibility audit', () => testComponentA11y(<Link href="localhost:8000">A Link</Link>)
    .then(results => expect(results.violations.length).toBe(0)));
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(<Link href="localhost:8000">A Link</Link>);
    const link = wrapper
      .find(LinkStateless);
    link.simulate('mouseEnter');
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().hovered)
      .toBe(true);
    link.simulate('mouseLeave');
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(<Link href="localhost:8000">A Link</Link>);
    const link = wrapper
      .find(LinkStateless);
    link.simulate('focus');
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().focused)
      .toBe(true);
    link.simulate('blur');
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().focused)
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
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().focused)
      .toBe(true);
    link.simulate('blur');
    wrapper.update();
    expect(wrapper.find(LinkStateless).props().focused)
      .toBe(false);
  });
});
