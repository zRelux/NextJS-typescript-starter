import React from 'react';

import { render, cleanup } from 'utils/testing';

import Button from '.';

afterEach(cleanup);

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button />);

    expect(getByText('Example')).toBeVisible();
  });
});
