import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, configure } from 'enzyme';
// @ts-expect-error TS(2307): Cannot find module 'enzyme-adapter-react-16' or it... Remove this comment to see the full error message
import Adapter from 'enzyme-adapter-react-16';
import ButtonStateless from '../ButtonStateless';
import PseudoClassComponent from './index';

configure({ adapter: new Adapter() });

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
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().hovered)
      .toBe(true);
    button.simulate('mouseLeave');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().hovered)
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
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
      .toBe(true);
    button.simulate('blur');
    wrapper.update();
    expect(wrapper.find(ButtonStateless).props().focused)
      .toBe(false);
  });
});
