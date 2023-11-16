import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countNumber = screen.getByText(/0/i);
  expect(countNumber).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  const button = screen.getByText('+');

  userEvent.click(button);

  expect(screen.getByTestId('count')).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  const button = screen.getByText('-');

  userEvent.click(button);

  expect(screen.getByTestId('count')).toHaveTextContent(-1);
});
