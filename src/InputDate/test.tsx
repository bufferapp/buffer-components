import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, configure } from 'enzyme';
// @ts-expect-error TS(2307): Cannot find module 'enzyme-adapter-react-16' or it... Remove this comment to see the full error message
import Adapter from 'enzyme-adapter-react-16';
import InputDate from './index';

configure({ adapter: new Adapter() });

describe('InputDate', () => {
  it('should trigger onChange when active day is clicked', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
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
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputDate
        input={{
          value: '',
          onChange,
        }}
        disableBefore={{
          // @ts-expect-error TS(2322): Type '{ day: number; month: number; year: number; ... Remove this comment to see the full error message
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
