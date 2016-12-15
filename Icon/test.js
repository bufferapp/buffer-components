jest.unmock('./index');
jest.unmock('../VectorGraphic');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import Icon from './index';

describe('Icon', () => {
  it('Icon component', () => {
    renderAndCheckSnapshot(
      <Icon
        height={50}
        width={50}
      />
    );
  });

  it('Icon (buffer)', () => {
    renderAndCheckSnapshot(
      <Icon
        type={'buffer'}
        height={50}
        width={50}
      />
    );
  });
});
