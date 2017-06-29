import React from 'react';
import { testComponentA11y } from '../lib/a11yTestHelper';
import Overlay from './index';
import Image from '../Image/index';

describe('Overlay', () => {
  it('should pass accessibility audit', () => testComponentA11y(
    <div style={{ textAlign: 'center' }}>
      <Image src={'http://lorempixel.com/400/400/cats/'} />
      <Overlay transparent />
    </div>,
    )
    .then(results => expect(results.violations.length).toBe(0)));
});
