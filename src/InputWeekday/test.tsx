import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, configure } from 'enzyme';
// @ts-expect-error TS(2307): Cannot find module 'enzyme-adapter-react-16' or it... Remove this comment to see the full error message
import Adapter from 'enzyme-adapter-react-16';
import InputWeekday from './index';

configure({ adapter: new Adapter() });

describe('InputWeekday', () => {
  it('should trigger onChange when day is selected', () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChange = jest.fn();
    const wrapper = mount(
      <InputWeekday
        input={{
          onChange,
          value: '',
        }}
      />,
    );
    wrapper
      .find('select')
      .first()
      .simulate('change', { target: { value: 'wed' } });
    expect(onChange)
      .toBeCalledWith({
        day: 'wed',
      });
  });
});
