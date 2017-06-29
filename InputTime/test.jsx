import React from 'react';
import { mount } from 'enzyme';
import { testComponentA11y } from '../lib/a11yTestHelper';
import InputTime from './index';

describe('InputTime', () => {
  it('should pass accessibility audit', () => {
    const onChange = jest.fn();
    return testComponentA11y(<InputTime
      input={{
        onChange,
      }}
    />,
    )
    .then(results => expect(results.violations.length).toBe(0));
  });
  it('should trigger onChange when hour is selected', () => {
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
