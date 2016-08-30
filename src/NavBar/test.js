jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import NavBar from './index';

describe('NavBar', () => {
  it('NavBar component', () => {
    renderAndCheckSnapshot(<NavBar>Navigation Elements</NavBar>);
  });
});
