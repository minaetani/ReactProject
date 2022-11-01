import { render, screen } from '@testing-library/react';
import App from './App';

test('renders baking planner', () => {
  render(<App />);
  const linkElement = screen.getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});