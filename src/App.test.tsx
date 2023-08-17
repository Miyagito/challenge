import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders h1 in Home component', () => {
  render(<Home />);
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toBeInTheDocument();
});
