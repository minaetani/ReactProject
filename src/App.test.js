import { render, screen } from '@testing-library/react';
import App from './App';

test('renders baking planner heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/heading/i);
  expect(linkElement).toBeInTheDocument();
});