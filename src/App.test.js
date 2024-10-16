import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Movie App/i); // Check for the title
  expect(titleElement).toBeInTheDocument();
});

test('renders a movie in the list', () => {
  render(<App />);
  const movieElement = screen.getByText(/Her/i); // Check for a movie title
  expect(movieElement).toBeInTheDocument();
})