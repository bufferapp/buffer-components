jest.unmock('./index');
import React from 'react';
import { renderAndCheckSnapshot } from '../testHelpers';
import VectorGraphic from './index';

describe('VectorGraphic', () => {
  it('VectorGraphic component', () => {
    renderAndCheckSnapshot(
      <VectorGraphic>
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ height', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        height={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ width', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        width={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ viewHeight', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        viewHeight={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });

  it('VectorGraphic w/ viewWidth', () => {
    renderAndCheckSnapshot(
      <VectorGraphic
        viewWidth={10}
      >
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </VectorGraphic>
    );
  });
});
