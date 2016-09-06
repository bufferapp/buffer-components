jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import VectorGraphic from './index';

describe('VectorGraphic', () => {
  it('VectorGraphic component', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        height={20}
        width={20}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ viewHeight', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        height={20}
        width={20}
        viewHeight={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ viewWidth', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        height={20}
        width={20}
        viewWidth={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });
});
