import React from 'react';
import { render, screen } from '@testing-library/react';

describe('wrapper', () => {
  it('works!', () => {
    render(<div>Loading!</div>);

    expect(screen.getByText('Loading!')).toBeInTheDocument();
  });
});
