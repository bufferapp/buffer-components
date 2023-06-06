import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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
