import React from 'react';
import Display from './Display';
import Controls from '../controls/Controls';
import { render } from '@testing-library/react';
import { get } from 'http';

test('gate default values are correct', () => {
  const { getByText } = render(<Display />);

  getByText(/Unlocked/i);
  getByText(/Open/i);
});

test('cannot be closed or opened if it is locked', () => {
  const { getByText } = render(<Controls />);

  const lockGateButton = getByText(/Lock Gate/i);
  const closedGateButton = getByText(/Close Gate/i);
});
