import React from 'react';
import { mount } from 'enzyme';
import { testComponentA11y } from '../lib/a11yTestHelper';
import InputDate from './index';

describe('InputDate', () => {
  it('should trigger onChange when active day is clicked', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <InputDate
        input={{
          value: '',
          onChange,
        }}
        initialMonthYear={{
          month: 21,
          year: 7,
        }}
      />,
    );
    wrapper
      .find('.DayPicker-Day')
      .not('.DayPicker-Day--disabled')
      .not('.DayPicker-Day--outside')
      .first()
      .simulate('click');
    expect(onChange)
      .toBeCalled();
  });
  it('should NOT trigger onChange when inactive day is clicked', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <InputDate
        input={{
          value: '',
          onChange,
        }}
        disableBefore={{
          day: 21,
          month: 7,
          year: 2015,
        }}
        initialMonthYear={{
          month: 21,
          year: 7,
        }}
      />,
    );
    wrapper
      .find('.DayPicker-Day--disabled')
      .not('.DayPicker-Day--outside')
      .first()
      .simulate('click');
    expect(onChange)
      .not.toBeCalled();
  });
});
