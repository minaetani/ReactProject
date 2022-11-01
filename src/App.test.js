import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Baking Planner', () => {
  render(<App />);
  const linkElement = screen.getByText(/heading/i);
  expect(linkElement).toBeInTheDocument();
});