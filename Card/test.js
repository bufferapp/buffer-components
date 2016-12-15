jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import Card from './index';

describe('Card', () => {
  it('Card component', () => {
    renderAndCheckSnapshot(<Card>Some Contents</Card>);
  });

  it('Empty Card', () => {
    renderAndCheckSnapshot(<Card empty>Some Contents</Card>);
  });

  it('Borderless Card', () => {
    renderAndCheckSnapshot(<Card noBorder>Some Contents</Card>);
  });
});
