jest.unmock('./index');
jest.unmock('../Icon');
jest.unmock('../Text');
jest.unmock('../VectorGraphic');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import NavBar from './index';

describe('NavBar', () => {
  it('NavBar component', () => {
    renderAndCheckSnapshot(<NavBar />);
  });

  it('NavBar w/title', () => {
    renderAndCheckSnapshot(<NavBar title={'Title'} />);
  });

  it('NavBar w/subtitle', () => {
    renderAndCheckSnapshot(<NavBar subtitle={'subtitle'} />);
  });
});
