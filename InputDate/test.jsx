import React from 'react';
import a11yTestHelper from '../lib/a11yTestHelper';
import { mount } from 'enzyme';
import InputDate from './index';

describe('InputDate', () => {
  it('should pass accessibility audit', (done) => {
    const onChange = jest.fn();
    a11yTestHelper.testComponent(<InputDate
      input={{
        value: '',
        onChange,
      }}
      initialMonthYear={{
        month: 21,
        year: 7,
      }}
    />, [], (results) => {
      expect(results.violations.length).toBe(0);
      done();
    });
  });
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
