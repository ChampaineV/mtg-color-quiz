import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Magic The Gathering Color Quiz/i);
  expect(titleElement).toBeInTheDocument();
});
