import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, configure } from 'enzyme';
// @ts-expect-error TS(2307): Cannot find module 'enzyme-adapter-react-16' or it... Remove this comment to see the full error message
import Adapter from 'enzyme-adapter-react-16';
import InputTime from './index';

configure({ adapter: new Adapter() });

describe('InputTime', () => {
  it('should trigger onChange when hour is selected', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputTime
        input={{
          onChange,
        }}
      />,
    );
    wrapper
      .find('select')
      .first()
      .simulate('change', { target: { value: 5 } });
    expect(onChange)
      .toBeCalledWith({
        hours: 5,
        minutes: 0,
      });
  });
  it('should trigger onChange when minute is selected', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputTime
        input={{
          onChange,
        }}
      />,
    );
    wrapper
      .find('select')
      .at(1)
      .simulate('change', { target: { value: 35 } });
    expect(onChange)
      .toBeCalledWith({
        hours: 0,
        minutes: 35,
      });
  });
  it('should trigger onChange when pm is selected', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputTime
        input={{
          onChange,
        }}
      />,
    );
    wrapper
      .find('select')
      .last()
      .simulate('change', { target: { value: 'PM' } });
    expect(onChange)
      .toBeCalledWith({
        hours: 12,
        minutes: 0,
      });
  });

  it('should trigger onChange when am is selected', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputTime
        input={{
          value: {
            hours: 14,
            minutes: 0,
          },
          onChange,
        }}
      />,
    );
    wrapper
      .find('select')
      .last()
      .simulate('change', { target: { value: 'AM' } });
    expect(onChange)
      .toBeCalledWith({
        hours: 2,
        minutes: 0,
      });
  });
});
