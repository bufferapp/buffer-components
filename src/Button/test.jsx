import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonStateless from '../ButtonStateless';
import testComponentA11y from '../lib/a11yTestHelper';
import Button from './index';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should pass accessibility audit', () => testComponentA11y(<Button>A Button</Button>)
    .then(results => expect(results.violations.length).toBe(0)));
  it('should toggle hovered prop when mouseEnter and mouseLeave are triggered', () => {
    const wrapper = mount(<Button>A Button</Button>);
    const button = wrapper
      .find(ButtonStateless);
    button.simulate('mouseEnter');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().hovered)
      .toBe(true);
    button.simulate('mouseLeave');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().hovered)
      .toBe(false);
  });

  it('should toggle focused prop when focus and blur are triggered', () => {
    const wrapper = mount(<Button>A Button</Button>);
    const button = wrapper
      .find(ButtonStateless);
    button.simulate('focus');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
      .toBe(true);
    button.simulate('blur');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
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
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
      .toBe(true);
    button.simulate('blur');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
      .toBe(false);
  });
});
