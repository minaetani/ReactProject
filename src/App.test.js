import { render, screen } from '@testing-library/react';
import App from './App';
test('renders shopping cart heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/bread/i);
  expect(linkElement).toBeInTheDocument();
});