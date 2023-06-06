import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import InputWeekday from './index';

configure({ adapter: new Adapter() });

describe('InputWeekday', () => {
  it('should trigger onChange when day is selected', () => {
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
