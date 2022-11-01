import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BakingPlanner', () => {
  render(<App />);
  const linkElement = screen.getByText(/heading/);
  expect(linkElement).toBeInTheDocument();
});